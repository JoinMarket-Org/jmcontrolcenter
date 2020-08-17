import { Component, OnInit, Input } from '@angular/core';
import { AccountbranchComponent } from '../accountbranch/accountbranch.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() accountBalance: string;
  externalBranch: AccountbranchComponent;
  internalBranch: AccountbranchComponent;
  @Input() acctdata: any;
  constructor() { }

  ngOnInit(): void {
  }

}
