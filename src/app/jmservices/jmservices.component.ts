import { Component, OnInit } from '@angular/core';
import { WalletService } from '../wallet.service';

@Component({
  selector: 'app-jmservices',
  templateUrl: './jmservices.component.html',
  styleUrls: ['./jmservices.component.css']
})
export class JMServicesComponent implements OnInit {
  makerActive: boolean = false;
  constructor(private walletService: WalletService) { }

  ngOnInit(): void {
  }

  startMakerService(){
    this.walletService.startMakerService().
      subscribe(
      result => {
        console.log("here is the result in JMServices.startMakerService:");
        console.log(result);
        this.makerActive = true;

      },
      err => {
        console.log("we caught the error in jmservices.");
        console.log("it was: " + err);
      },
      () => {
        console.log("done");
      }
    );
  }

}
