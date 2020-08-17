import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-infopopupdialog',
  templateUrl: './infopopupdialog.component.html',
  styleUrls: ['./infopopupdialog.component.css']
})
export class InfopopupdialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,
  public dialogRef: MatDialogRef<InfopopupdialogComponent>) { }

  ngOnInit(): void {
  }

  closeDialog(){
   this.dialogRef.close();
  }
}
