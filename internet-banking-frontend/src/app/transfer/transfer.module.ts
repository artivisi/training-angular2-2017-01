import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route }   from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RekeningModule } from '../rekening/rekening.module';

import { InputTransferComponent } from './input-transfer/input-transfer.component';
import { KonfirmasiTransferComponent } from './konfirmasi-transfer/konfirmasi-transfer.component';

import { TransferService } from './transfer.service';

const routingTransfer: Route[] = [
  { path: 'transfer/konfirmasi', component: KonfirmasiTransferComponent },
  { path: 'transfer/input', component: InputTransferComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routingTransfer),
    RekeningModule
  ],
  declarations: [InputTransferComponent, KonfirmasiTransferComponent],
  providers: [ TransferService ]
})
export class TransferModule { }
