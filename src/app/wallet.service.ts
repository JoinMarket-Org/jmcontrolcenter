import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
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
  isWalletOpen: boolean = false;
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
    const httpHeaders = new HttpHeaders()
    .set('JMCookie', 'dummycookie');
    console.log("in display Wallet before http request")
    return this.http.get(this.ROOT_URL + '/wallet/' + this.walletname + '/display', {headers: httpHeaders});
  }

  closeWallet(): Observable<any>{
    const httpHeaders = new HttpHeaders()
    .set('JMCookie', 'dummycookie');
    console.log("in close Wallet before http request")
    return this.http.get(this.ROOT_URL + '/wallet/' + this.walletname + '/lock', {headers: httpHeaders});
  }

  authWallet(walletname: string, password: string){
    console.log("authwallet was called");
    const httpHeaders = new HttpHeaders({'JMCookie': 'dummycookie'});
    let authUrl = this.ROOT_URL + '/wallet/'+walletname+'/unlock';
    this.walletname = walletname;
   return this.http.post(authUrl, {password}, {headers: httpHeaders});
  }

  getWalletDisplay(): Observable<any> {
    return this.walletdisplay$;
  }
  startMakerService(): Observable<any>{
    console.log("startMakerService was called");
    const httpHeaders = new HttpHeaders({'JMCookie': 'dummycookie'});
    if (this.walletname){
      let makerUrl = this.ROOT_URL + '/wallet/'+this.walletname+'/maker/start';
    return this.http.post(makerUrl,
      {txfee: 100,
      cjfee_a: 2000,
      cjfee_r: 0.0002,
      ordertype: "swreloffer",
      minsize: 1000000
      }, {headers: httpHeaders});
    }
    else {
      return throwError('there was not a defined walletname, so cannot start maker');
    }
  }
  startSNICKERService(): Observable<any>{
    console.log("startSNICKERService was called");
    const httpHeaders = new HttpHeaders({'JMCookie': 'dummycookie'});
    if (this.walletname){
      let makerUrl = this.ROOT_URL + '/wallet/'+this.walletname+'/snicker/start';
    return this.http.get(makerUrl, {headers: httpHeaders});
    }
    else {
      return throwError('there was not a defined walletname, so cannot start SNICKER');
    }
  }
  stopSNICKERService(): Observable<any>{
    console.log("stopSNICKERService was called");
    const httpHeaders = new HttpHeaders({'JMCookie': 'dummycookie'});
    if (this.walletname){
    let makerUrl = this.ROOT_URL + '/wallet/'+this.walletname+'/snicker/stop';
    return this.http.get(makerUrl, {headers: httpHeaders});
    }
    else {
      return throwError("there was not a defined wallet so cannot stop SNICKER.");
    }
  }
}
