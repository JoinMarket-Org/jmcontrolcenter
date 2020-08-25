import { Component, OnInit } from '@angular/core';
import { WalletService } from './wallet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Joinmarket Control Center';
  constructor (private walletService: WalletService){

  }
  ngOnInit (){

  }
}
