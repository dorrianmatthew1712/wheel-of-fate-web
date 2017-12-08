import { EventEmitter, Injectable, Output } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/';

@Injectable()
export class EngineerService {

    constructor(private http: Http) { }

    getEngineers() {
        return this.http.get(`${environment.apiUrl}/engineers`)
            .map((schedule: Response) => schedule.json());
    }
}
