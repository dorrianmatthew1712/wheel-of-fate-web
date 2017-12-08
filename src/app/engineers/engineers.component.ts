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

  constructor(private engineerService: EngineerService, private growlService: GrowlService) { }

  ngOnInit() {
    this.getEngineers();
  }

  getEngineers() {
    this.engineerService.getEngineers().subscribe(engineers => {
      this.engineers = engineers;
    }, error => {
      this.growlService.addNewGrowl('error', 'Engineers not found', 'Error retrieving the engineers');
    });
  }

}
