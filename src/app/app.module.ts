import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WalletComponent } from './wallet/wallet.component';
import { AccountComponent } from './account/account.component';
import { AccountbranchComponent } from './accountbranch/accountbranch.component';
import { AddressComponent } from './address/address.component';
import { WalletService } from './wallet.service';
import { HttpClientModule } from '@angular/common/http';
// Angular Material imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatTreeModule } from '@angular/material/tree';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from '@angular/cdk/clipboard';
import { InfopopupdialogComponent } from './infopopupdialog/infopopupdialog.component';

import { UnlockComponent } from './unlock/unlock.component';
import { AboutComponent } from './about/about.component';
import { JMServicesComponent } from './jmservices/jmservices.component';
import { JMSettingsComponent } from './jmsettings/jmsettings.component';
import { JMLogsComponent } from './jmlogs/jmlogs.component';
import { NewWalletComponent } from './new-wallet/new-wallet.component';
import { GenWalletComponent } from './gen-wallet/gen-wallet.component';

@NgModule({
  declarations: [
    AppComponent,
    WalletComponent,
    AccountComponent,
    AccountbranchComponent,
    AddressComponent,
    TopMenuComponent,
    InfopopupdialogComponent,
    UnlockComponent,
    AboutComponent,
    JMServicesComponent,
    JMSettingsComponent,
    JMLogsComponent,
    NewWalletComponent,
    GenWalletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatMenuModule,
    MatCardModule,
    MatTreeModule,
    MatExpansionModule,
    MatDialogModule,
    MatSelectModule,
    ClipboardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [ WalletService],
  bootstrap: [AppComponent]
})
export class AppModule { }
