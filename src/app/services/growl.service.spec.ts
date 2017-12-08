import { Http } from '@angular/http';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { Observable } from 'rxjs';
import { GrowlService } from '../services';

describe('GrowlServiceComponent', () => {
    let service: GrowlService;

    beforeEach((done) => {
        TestBed
            .configureTestingModule({
                providers: [
                    { provide: GrowlService, useClass: GrowlService }]
            });

        inject([GrowlService], (growlService: GrowlService) => {
            service = growlService;
            done();
        })();
    });

    it('should create', () => {
        expect(service).toBeTruthy();
    });

    it('should call the api with the correct path', () => {
        const spy = spyOn(service.newGrowlAdded, 'emit');
        service.addNewGrowl('success', 'summary', 'title');
        expect(spy).toHaveBeenCalledWith({ severity: 'success', summary: 'summary', detail: 'title' });
    });
});
