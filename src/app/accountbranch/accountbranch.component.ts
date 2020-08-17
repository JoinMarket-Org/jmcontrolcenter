import { Component, OnInit, Input } from '@angular/core';
import { InfodialogService } from '../infodialog.service';
import { AddressComponent } from '../address/address.component';

@Component({
  selector: 'app-accountbranch',
  templateUrl: './accountbranch.component.html',
  styleUrls: ['./accountbranch.component.css']
})
export class AccountbranchComponent implements OnInit {
  addresses: AddressComponent[];
  /* We do not store an xpub for an internal branch, but still
  store a path.
  */
 branchShortTitle: string;
 hdPath: string;
 xPub: string;
  @Input() branchData: any;
  @Input() branchTitle: string;
  @Input() branchBalance: string;
  
  constructor(private infoDialogService: InfodialogService) { }

  ngOnInit(): void {
    console.log("Branch title string was: " + this.branchTitle);
    let branchTitleArray = this.branchTitle.trim().split(/\s+/);
    // currently says 'External' so not useful since we already have that
    // at the account level:
    this.branchShortTitle = branchTitleArray[0];
    console.log("Branch short title string was: " + this.branchShortTitle);
    // but both of these are needed for display to user;
    // note that xPub is *very* long so must be encapsulated in a dialog.
    this.hdPath = branchTitleArray[2];
    console.log("Branch hd path was: " + this.hdPath);
    if (this.branchShortTitle == "external"){
      this.xPub = branchTitleArray[3];  
    }
    else {
      this.xPub = "no xPub for internal branches; deposit only to external branch!";
    }
    console.log("Branch xpub was: " + this.hdPath);
  }

  onXpubClick(){
    this.infoDialogService.openConfirmDialog('Xpub copied to clipboard.');
  }

}
