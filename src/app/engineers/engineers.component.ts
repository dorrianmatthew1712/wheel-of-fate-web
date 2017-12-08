import { Component, OnInit } from '@angular/core';

import { EngineerService, GrowlService } from '../services';
import { Engineer } from '../models';

@Component({
  selector: 'bau-engineers',
  templateUrl: './engineers.component.html',
  styleUrls: ['./engineers.component.scss']
})
export class EngineersComponent implements OnInit {

  engineers: Engineer[];
  showLoading: boolean;

  constructor(private engineerService: EngineerService, private growlService: GrowlService) { }

  ngOnInit() {
    this.getEngineers();
  }

  getEngineers() {
    this.showLoading = true;
    this.engineerService.getEngineers().subscribe(engineers => {
      this.engineers = engineers;
      this.showLoading = false;
    }, error => {
      this.growlService.addNewGrowl('error', 'Engineers not found', 'Error retrieving the engineers');
      this.showLoading = false;
    });
  }

}
