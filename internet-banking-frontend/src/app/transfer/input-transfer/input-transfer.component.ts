import { Component, OnInit } from '@angular/core';

import { Router }   from '@angular/router';

@Component({
  selector: 'app-input-transfer',
  templateUrl: './input-transfer.component.html',
  styleUrls: ['./input-transfer.component.css']
})
export class InputTransferComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  lakukanTransfer(): void {
      this.router.navigate(['transfer/konfirmasi']);
  }
}
