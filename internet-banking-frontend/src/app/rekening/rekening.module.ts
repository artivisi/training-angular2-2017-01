import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Route }   from '@angular/router';

import { DropdownModule } from 'ng2-bootstrap';

import { DaftarRekeningComponent } from './daftar-rekening/daftar-rekening.component';
import { SaldoRekeningComponent } from './saldo-rekening/saldo-rekening.component';
import { MutasiRekeningComponent } from './mutasi-rekening/mutasi-rekening.component';
import { PilihanRekeningComponent } from './pilihan-rekening/pilihan-rekening.component';
import { RekeningService } from './rekening.service';

const routingRekening: Route[] = [
  { path: 'rekening/list', component: DaftarRekeningComponent },
  { path: 'rekening/saldo', component: SaldoRekeningComponent },
  { path: 'rekening/mutasi', component: MutasiRekeningComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routingRekening),
    DropdownModule.forRoot()
  ],
  declarations: [
    DaftarRekeningComponent,
    SaldoRekeningComponent,
    MutasiRekeningComponent,
    PilihanRekeningComponent
  ],
  exports: [
    PilihanRekeningComponent
  ],
  providers: [
    RekeningService
  ]
})
export class RekeningModule { }
