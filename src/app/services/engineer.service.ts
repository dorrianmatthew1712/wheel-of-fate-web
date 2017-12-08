import { Observable } from 'rxjs';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/';

@Injectable()
export class EngineerService {

    constructor(private http: Http) { }

    getEngineers() {
        return this.http.get(`${environment.apiUrl}/engineers`)
            .map(response => response ? response.json() : Observable.of(null));
    }
}
