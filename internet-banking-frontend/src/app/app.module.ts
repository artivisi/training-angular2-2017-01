import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AccordionModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { MenuSampingComponent } from './menu-samping/menu-samping.component';
import { SelamatDatangComponent } from './selamat-datang/selamat-datang.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuSampingComponent,
    SelamatDatangComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AccordionModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
