import { EventEmitter, Injectable, Output } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/';

@Injectable()
export class ScheduleService {

    constructor(private http: Http) { }

    generateNewSchedule() {
        return this.http.get(`${environment.apiUrl}/create-schedule`)
            .map((schedule: Response) => schedule.json());
    }
}
