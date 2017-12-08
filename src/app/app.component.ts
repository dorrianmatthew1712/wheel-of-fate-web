import { Component } from '@angular/core';
import { Message } from 'primeng/primeng';
import { GrowlService } from './services';

@Component({
  selector: 'bau-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  msgs: Message[] = [];
  displayTime = 5000;

  constructor(private growlService: GrowlService) {
    this.growlService.newGrowlAdded.subscribe(growl => {
      this.msgs = [...this.msgs, growl];
    });
  }
}
