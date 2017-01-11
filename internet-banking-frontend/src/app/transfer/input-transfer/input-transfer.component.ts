import { Component, OnInit } from '@angular/core';

import { Router }   from '@angular/router';

import { Transfer } from '../transfer.model';
import { TransferService } from '../transfer.service';

import {ProgressIndicatorService} from '../../progress-indicator.service';

import { Rekening } from '../../rekening/rekening.model';

@Component({
  selector: 'app-input-transfer',
  templateUrl: './input-transfer.component.html',
  styleUrls: ['./input-transfer.component.css']
})
export class InputTransferComponent implements OnInit {

  transfer = new Transfer(undefined, undefined, 0, '');

  constructor(private router: Router,
      private transferService : TransferService,
      private progress : ProgressIndicatorService) { }

  ngOnInit() {
  }

  lakukanTransfer(): void {
      this.progress.toggleIndicator("Memproses transfer");
      this.transferService.simpan(this.transfer)
      .then(() => {
          this.progress.toggleIndicator(null);
          this.router.navigate(['transfer/konfirmasi']);
      })
      .catch(error => {
          console.log("Gagal menyimpan transfer" + error);
          this.progress.toggleIndicator(null);
      });

  }

  get debugForm(){
      return JSON.stringify(this.transfer);
  }
}
