import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Route }   from '@angular/router';

import { RekeningComponent } from './rekening.component';
import { DaftarRekeningComponent } from './daftar-rekening/daftar-rekening.component';
import { SaldoRekeningComponent } from './saldo-rekening/saldo-rekening.component';
import { MutasiRekeningComponent } from './mutasi-rekening/mutasi-rekening.component';

const routingRekening: Route[] = [
  { path: 'rekening/list', component: DaftarRekeningComponent },
  { path: 'rekening/saldo', component: SaldoRekeningComponent },
  { path: 'rekening/mutasi', component: MutasiRekeningComponent },
  { path: 'rekening/**', component: RekeningComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routingRekening)
  ],
  declarations: [
    RekeningComponent,
    DaftarRekeningComponent,
    SaldoRekeningComponent,
    MutasiRekeningComponent
  ]
})
export class RekeningModule { }
