import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { WalletService } from '../wallet.service';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  walletName$: Observable<string>;
  walletBalance$: Observable<string>;
  accountdatas$: Observable<Array<any>>;
  constructor(private walletService: WalletService) { }

  ngOnInit(): void {
    console.log("in wallet onInit: " + this.walletService);
  }

  displayWallet(walletdata$: Observable<any>){
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
}
