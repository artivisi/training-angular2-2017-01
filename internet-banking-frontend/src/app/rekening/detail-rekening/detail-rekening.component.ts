import { Component, OnInit, Input } from '@angular/core';

import { Rekening } from '../rekening.model';

@Component({
  selector: 'detail-rekening',
  templateUrl: './detail-rekening.component.html',
  styleUrls: ['./detail-rekening.component.css']
})
export class DetailRekeningComponent implements OnInit {

  @Input() rekening : Rekening;

  constructor() { }

  ngOnInit() {
  }

}
