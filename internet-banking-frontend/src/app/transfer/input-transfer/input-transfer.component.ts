import { Component, OnInit } from '@angular/core';

import { Router }   from '@angular/router';

import { InputTransfer } from '../transfer.model';

import { Rekening } from '../../rekening/rekening.model';

@Component({
  selector: 'app-input-transfer',
  templateUrl: './input-transfer.component.html',
  styleUrls: ['./input-transfer.component.css']
})
export class InputTransferComponent implements OnInit {

  transfer = new InputTransfer(undefined, undefined, 0, '');
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  lakukanTransfer(): void {
      this.router.navigate(['transfer/konfirmasi']);
  }

  ubahRekeningSumber(r : Rekening) {
      this.transfer.sumber = r;
  }

  ubahRekeningTujuan(r : Rekening) {
      this.transfer.tujuan = r;
  }

  get debugForm(){
      return JSON.stringify(this.transfer);
  }
}
