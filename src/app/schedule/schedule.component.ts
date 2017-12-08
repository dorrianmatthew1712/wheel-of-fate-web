import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

import { ScheduleService, GrowlService } from '../services';
import { Schedule } from './../models';

@Component({
  selector: 'bau-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  schedule: Schedule;
  showLoading: boolean;

  get getCreatedAt(): string {
    return this.schedule ? moment(this.schedule.createdDate).format('MMM D YY HH:mm') : '';
  }

  constructor(private scheduleService: ScheduleService, private growlService: GrowlService) { }

  ngOnInit() {
    this.generateSchedule();
  }

  generateSchedule() {
    this.showLoading = true;
    this.scheduleService.generateNewSchedule().subscribe(schedule => {
      this.schedule = schedule;
      this.showLoading = false;
    }, error => {
      this.growlService.addNewGrowl('error', 'Schedule not created', 'Error creating a new schedule');
      this.showLoading = false;
    });
  }
}
