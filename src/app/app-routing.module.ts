import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WalletComponent } from './wallet/wallet.component';
import { AboutComponent } from './about/about.component';
import { JMSettingsComponent } from './jmsettings/jmsettings.component';
import { JMServicesComponent } from './jmservices/jmservices.component';
import { JMLogsComponent } from './jmlogs/jmlogs.component';
import { NewWalletComponent } from './new-wallet/new-wallet.component';


const routes: Routes = [
  { path: "generate",
    component: NewWalletComponent
  },
  {
    path: "wallet",
    component: WalletComponent
  },
  { path: "about",
    component: AboutComponent
  },
  { path: "settings",
    component: JMSettingsComponent
  },
  { path: "services",
    component: JMServicesComponent
  },
  { path: "logs",
    component: JMLogsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
