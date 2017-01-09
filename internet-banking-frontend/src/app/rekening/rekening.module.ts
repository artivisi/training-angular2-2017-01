import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Route }   from '@angular/router';

import { DaftarRekeningComponent } from './daftar-rekening/daftar-rekening.component';
import { SaldoRekeningComponent } from './saldo-rekening/saldo-rekening.component';
import { MutasiRekeningComponent } from './mutasi-rekening/mutasi-rekening.component';

const routingRekening: Route[] = [
  { path: 'rekening/list', component: DaftarRekeningComponent },
  { path: 'rekening/saldo', component: SaldoRekeningComponent },
  { path: 'rekening/mutasi', component: MutasiRekeningComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routingRekening)
  ],
  declarations: [
    DaftarRekeningComponent,
    SaldoRekeningComponent,
    MutasiRekeningComponent
  ]
})
export class RekeningModule { }
