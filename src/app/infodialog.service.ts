import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfopopupdialogComponent } from './infopopupdialog/infopopupdialog.component';

@Injectable({
  providedIn: 'root'
})
export class InfodialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(msg){
    this.dialog.open(InfopopupdialogComponent, {
      width: '390px',
      panelClass: 'confirm-dialog-container',
      data: {
        message: msg
      }
    });
  }
}
