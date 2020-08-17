import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  /* Addresses as UI objects for display need to
  have the address itself, its HD path, its balance
  and optionally a label.
  */
  @Input() addressString: string;
  @Input() addressPath: string;
  @Input() addressBalance: number;
  @Input() addressLabel: string;
  constructor() {
   }

  ngOnInit(): void {
  }

}
