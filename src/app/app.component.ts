import { Component, OnInit, ViewChild } from '@angular/core';
//import { UnlockdialogService } from './unlockdialog.service';
import { MatDialog } from '@angular/material/dialog';
import { UnlockComponent } from './unlock/unlock.component';
import { WalletService } from './wallet.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('walletcomponent') walletComponent;
  title = 'Joinmarket Control Center';
  constructor (public dialog: MatDialog,
    private walletService: WalletService){

  }
  ngOnInit (){

  }
  openUnlockDialog(){
    //this.unlockdialogService.openUnlockDialog();
    let dialogRef = this.dialog.open(UnlockComponent,{});
    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      this.walletService.authWallet(result.wn, result.pass).subscribe(
        result => {
          let walletdata$: Observable<any>;
          walletdata$ = this.walletService.displayWallet();
          this.walletComponent.displayWallet(walletdata$);
        }
      );

    });
  }
}
