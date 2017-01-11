import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Route }   from '@angular/router';

import { DropdownModule } from 'ng2-bootstrap';

import { CekLoginGuard } from '../ceklogin.service';

import { DaftarRekeningComponent } from './daftar-rekening/daftar-rekening.component';
import { SaldoRekeningComponent } from './saldo-rekening/saldo-rekening.component';
import { MutasiRekeningComponent } from './mutasi-rekening/mutasi-rekening.component';
import { PilihanRekeningComponent } from './pilihan-rekening/pilihan-rekening.component';
import { RekeningService } from './rekening.service';
import { DetailRekeningComponent } from './detail-rekening/detail-rekening.component';

const routingRekening: Route[] = [
  { path: 'rekening/list', component: DaftarRekeningComponent, canActivate: [CekLoginGuard]  },
  { path: 'rekening/saldo', component: SaldoRekeningComponent, canActivate: [CekLoginGuard]  },
  { path: 'rekening/mutasi', component: MutasiRekeningComponent, canActivate: [CekLoginGuard]  }
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
    PilihanRekeningComponent,
    DetailRekeningComponent
  ],
  exports: [
    PilihanRekeningComponent
  ],
  providers: [
    RekeningService
  ]
})
export class RekeningModule { }
