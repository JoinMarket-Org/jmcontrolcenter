import { Component, OnInit } from '@angular/core';
import { GenWalletComponent } from '../gen-wallet/gen-wallet.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-new-wallet',
  templateUrl: './new-wallet.component.html',
  styleUrls: ['./new-wallet.component.css']
})
export class NewWalletComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.openGenerateDialog();
  }

  openGenerateDialog(){
    let dialogRef = this.dialog.open(GenWalletComponent,{});
    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      if ( result ) {
      /*
      this.walletService.authWallet(result.wn, result.pass).subscribe(
        result => {
          this.walletService.isWalletOpen = true;
          this.displayWallet();
        }
      );
      */
      console.log(result.wn);
      console.log(result.pass);
      }
      
    });
  }
}
