import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-unlock',
  templateUrl: './unlock.component.html',
  styleUrls: ['./unlock.component.css']
})
export class UnlockComponent implements OnInit {
  fc = new FormControl('', [Validators.required]);
  fcpass = new FormControl('', [Validators.required]);
  constructor(@Inject(MAT_DIALOG_DATA) public data,
  public dialogRef: MatDialogRef<UnlockComponent>) { 
    
  }

  ngOnInit(): void {
  }

  closeDialog(){
   this.dialogRef.close();
  }

  doUnlock(){
    this.dialogRef.close({wn: this.fc.value, pass: this.fcpass.value});
  }
  getErrorMessage(){
    return this.fc.hasError('required') ? 'You must enter a value.' : '';
  }
}
