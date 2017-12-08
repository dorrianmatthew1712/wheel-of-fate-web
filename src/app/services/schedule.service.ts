import { EventEmitter, Injectable, Output } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/';

@Injectable()
export class ScheduleService {

    constructor(private http: Http) { }

    generateNewSchedule() {
        return this.http.get(`${environment.apiUrl}/create-schedule`)
            .map(response => response.json());
    }
}
