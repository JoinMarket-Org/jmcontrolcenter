import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AccountComponent } from './account/account.component';


export interface IWalletData {
  walletname: string,
  totalBalance: number;
  accounts: Array<AccountComponent>;
}

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  readonly ROOT_URL = 'https://localhost:28183';
  walletdata: any;
  walletname: string;
  walletdisplay$: Observable<any>;
  constructor(private http: HttpClient) { }

  ngOnInit(){
    console.log("in walletService onInit")
    //this.http.get(this.ROOT_URL + '/wallet/tangular.jmdat/unlock/abcd1')
    //.subscribe(val => this.walletdata = val)
  }
  
  displayWallet(): Observable<any>{
    console.log("in display Wallet before http request")
    return this.http.get(this.ROOT_URL + '/wallet/' + this.walletname + '/display');
  }

  authWallet(walletname: string, password: string){
    console.log("authwallet was called");
    let authUrl = this.ROOT_URL + '/wallet/'+walletname+'/unlock';
    this.walletname = walletname;
    /*
    this.http.post(authUrl, {password}).subscribe(result => {
      console.log("auth got result: " + result);
      // auto-display on successful unlock:
      this.walletdisplay$ = this.displayWallet();

    });
    */
   return this.http.post(authUrl, {password});
  }

  getWalletDisplay(): Observable<any> {
    return this.walletdisplay$;
  }
}
