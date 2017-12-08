import { Http } from '@angular/http';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { Observable } from 'rxjs';
import { EngineerService } from '../services';

describe('EngineerServiceComponent', () => {
    let service: EngineerService;
    let mockHttp: any;

    beforeEach((done) => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['get']);
        mockHttp.get.and.returnValue(Observable.from([
            { firstName: 'Test', lastName: 'Name', position: 'Position' },
            { firstName: 'Test 2', lastName: 'Name 2', position: 'Position 2' }
        ]));

        TestBed
            .configureTestingModule({
                providers: [
                    { provide: EngineerService, useClass: EngineerService },
                    { provide: Http, useValue: mockHttp }]
            });

        inject([EngineerService], (engineerService: EngineerService) => {
            service = engineerService;
            done();
        })();
    });

    it('should create', () => {
        expect(service).toBeTruthy();
    });

    it('should call the api with the correct path', () => {
        service.getEngineers();
        expect(mockHttp.get).toHaveBeenCalledWith('http://localhost:8080/engineers');
    });
});
