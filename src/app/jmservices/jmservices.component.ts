import { Component, OnInit } from '@angular/core';
import { WalletService } from '../wallet.service';
import { removeSummaryDuplicates } from '@angular/compiler';

@Component({
  selector: 'app-jmservices',
  templateUrl: './jmservices.component.html',
  styleUrls: ['./jmservices.component.css']
})
export class JMServicesComponent implements OnInit {
  makerActive: boolean = false;
  SNICKERActive: boolean = false;

  constructor(private walletService: WalletService) { }

  ngOnInit(): void {
  }

  stopSNICKERService(){
    this.walletService.stopSNICKERService().
    subscribe(result => {
      console.log("stopping snickerservice.");
      this.SNICKERActive = false;
    })
  }

  startSNICKERService(){
    this.walletService.startSNICKERService().
    subscribe(result => {
      console.log("Result of startSNICKERservice:");
      console.log(result);
      this.SNICKERActive = true;
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
