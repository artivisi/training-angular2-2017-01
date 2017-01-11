import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Route }   from '@angular/router';

import { AccordionModule } from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { MenuSampingComponent } from './menu-samping/menu-samping.component';
import { SelamatDatangComponent } from './selamat-datang/selamat-datang.component';
import { RekeningModule } from './rekening/rekening.module';
import { TransferModule } from './transfer/transfer.module';
import { ProfilComponent } from './profil/profil.component';

import { ProgressIndicatorService } from './progress-indicator.service';

const routingAplikasi: Route[] = [
  { path: 'rekening', redirectTo: '/rekening', pathMatch: 'full' },
  { path: 'transfer', redirectTo: '/transfer', pathMatch: 'full' },
  { path: 'profil', component: ProfilComponent },
  { path: '**', component: SelamatDatangComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuSampingComponent,
    SelamatDatangComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routingAplikasi),
    AccordionModule.forRoot(),
    ModalModule.forRoot(),
    RekeningModule,
    TransferModule
  ],
  providers: [ProgressIndicatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
