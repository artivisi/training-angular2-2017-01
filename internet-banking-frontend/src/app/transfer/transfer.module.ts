import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route }   from '@angular/router';

import { RekeningModule } from '../rekening/rekening.module';

import { InputTransferComponent } from './input-transfer/input-transfer.component';
import { KonfirmasiTransferComponent } from './konfirmasi-transfer/konfirmasi-transfer.component';

const routingTransfer: Route[] = [
  { path: 'transfer/konfirmasi', component: KonfirmasiTransferComponent },
  { path: 'transfer/input', component: InputTransferComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routingTransfer),
    RekeningModule
  ],
  declarations: [InputTransferComponent, KonfirmasiTransferComponent]
})
export class TransferModule { }
