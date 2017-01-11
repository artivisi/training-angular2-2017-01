import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ProgressIndicatorService } from './progress-indicator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Aplikasi Internet Banking';
  notification : string;
  subscription: Subscription;

  constructor(private progress : ProgressIndicatorService ) {

  }

  ngOnInit(){
    this.subscription = this.progress.getStatus().subscribe(data => this.notification = data);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
