import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { WalletService } from '../wallet.service';
import { MatDialog } from '@angular/material/dialog';
import { UnlockComponent } from '../unlock/unlock.component';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  walletName$: Observable<string>;
  walletBalance$: Observable<string>;
  accountdatas$: Observable<Array<any>>;
  walletData$: Observable<any>;

  constructor(private walletService: WalletService, public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log("in wallet onInit: " + this.walletService);
    console.log("IWO: " + this.walletService.isWalletOpen);
    if (! this.walletService.isWalletOpen) {
      this.openUnlockDialog();
    }
    else {
      this.displayWallet();
    }
  }

  displayWallet(){
    let walletdata$: Observable<any>;
    walletdata$ = this.walletService.displayWallet();
    this.accountdatas$ = walletdata$.pipe(
      map(res => res[0].walletinfo.accounts)
    )
    this.walletName$ = walletdata$.pipe(
      map(res => res[0].walletname)
    )
    this.walletBalance$ = walletdata$.pipe(
      map(res => res[0].walletinfo.total_balance)
    )
  }
  openUnlockDialog(){
    let dialogRef = this.dialog.open(UnlockComponent,{});
    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      this.walletService.authWallet(result.wn, result.pass).subscribe(
        result => {
          this.walletService.isWalletOpen = true;
          this.displayWallet();
        }
      );

    });
  }
  closeWallet(){
    this.walletService.isWalletOpen = false;
    this.walletService.closeWallet().subscribe(
      result => {
        console.log(result);
      }
    );
  }
  isWalletOpen() {
    // this state is managed by the singleton Service:
    return this.walletService.isWalletOpen;
  }
}
