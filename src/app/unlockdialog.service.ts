import { Injectable } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { UnlockComponent } from './unlock/unlock.component';
@Injectable({
  providedIn: 'root'
})
export class UnlockdialogService {

  constructor(private dialog: MatDialog) { }

  openUnlockDialog(){
    this.dialog.open(UnlockComponent, {
    });
  }
}
