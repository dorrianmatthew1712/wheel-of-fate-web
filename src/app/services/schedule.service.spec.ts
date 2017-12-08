import { Http } from '@angular/http';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { Observable } from 'rxjs';
import { ScheduleService } from '../services';

describe('ScheduleServiceComponent', () => {
    let service: ScheduleService;
    let mockHttp: any;

    beforeEach((done) => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['get']);
        mockHttp.get.and.returnValue(Observable.from([]));

        TestBed
            .configureTestingModule({
                providers: [
                    { provide: ScheduleService, useClass: ScheduleService },
                    { provide: Http, useValue: mockHttp }]
            });

        inject([ScheduleService], (scheduleService: ScheduleService) => {
            service = scheduleService;
            done();
        })();
    });

    it('should create', () => {
        expect(service).toBeTruthy();
    });

    it('should call the api with the correct path', () => {
        service.generateNewSchedule();
        expect(mockHttp.get).toHaveBeenCalledWith('http://localhost:8080/create-schedule');
    });
});
