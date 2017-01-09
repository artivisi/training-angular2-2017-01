import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Route }   from '@angular/router';

import { AccordionModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { MenuSampingComponent } from './menu-samping/menu-samping.component';
import { SelamatDatangComponent } from './selamat-datang/selamat-datang.component';
import { RekeningModule } from './rekening/rekening.module';
import { TransferComponent } from './transfer/transfer.component';
import { ProfilComponent } from './profil/profil.component';

const routingAplikasi: Route[] = [
  { path: 'rekening', redirectTo: '/rekening', pathMatch: 'full' },
  { path: 'transfer', component: TransferComponent },
  { path: 'profil', component: ProfilComponent },
  { path: '**', component: SelamatDatangComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuSampingComponent,
    SelamatDatangComponent,
    TransferComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routingAplikasi),
    AccordionModule.forRoot(),
    RekeningModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
