import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { _MAT_HINT } from '@angular/material/form-field';

export function confValidator(): ValidatorFn {
  let myFun = (cc: FormGroup): ValidationErrors =>{
    if (cc.get("fcpass") === cc.get("fcpass2")) {
      return null;
    }
    return {something: 'someError'};
  };
  return myFun;
  }

@Component({
  selector: 'app-gen-wallet',
  templateUrl: './gen-wallet.component.html',
  styleUrls: ['./gen-wallet.component.css']
})
export class GenWalletComponent implements OnInit {
  generateForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data,
  public dialogRef: MatDialogRef<GenWalletComponent>) {
    this.generateForm = new FormGroup({
      fc: new FormControl('', [Validators.required]),
      fcpass: new FormControl('', [Validators.required]),
      fcpass2: new FormControl('', [Validators.required])
    });
    this.generateForm.setValidators(confValidator());
  }

  ngOnInit(): void {
  }

  get fc(): any { return this.generateForm.get("fc"); }
  
  closeDialog(){
    this.dialogRef.close();
   }
 
   doGenerate(){
     if (this.generateForm.get("fcpass") != this.generateForm.get("fcpass2")) {
       console.log("huh, they don't match");
     }
     this.dialogRef.close({wn: this.generateForm.get("fc").value, pass: this.generateForm.get("fcpass").value});
   }
   getErrorMessage(){
     return this.generateForm.get("fc").hasError('required') ? 'You must enter a value.' : '';
   }
 }
