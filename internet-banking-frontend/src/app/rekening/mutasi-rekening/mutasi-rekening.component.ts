import { Component, OnInit } from '@angular/core';

import { ProgressIndicatorService } from '../../progress-indicator.service';

@Component({
  selector: 'app-mutasi-rekening',
  templateUrl: './mutasi-rekening.component.html',
  styleUrls: ['./mutasi-rekening.component.css']
})
export class MutasiRekeningComponent implements OnInit {

  constructor(private progress : ProgressIndicatorService) { }

  ngOnInit() {
  }

  showNotification(){
      this.progress.toggleIndicator("Halo");
  }

  hideNotification(){
      this.progress.toggleIndicator(null);
  }
}
