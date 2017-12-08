import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineersComponent } from './engineers.component';
import { GrowlService, EngineerService } from '../services';
import { Observable } from 'rxjs/Rx';

describe('EngineersComponent', () => {
  let fixture: ComponentFixture<EngineersComponent>;
  let mockEngineerService: any;
  let mockGrowlService: any;

  beforeEach((done) => {
    mockEngineerService = jasmine.createSpyObj('mockEngineerService', ['getEngineers']);
    mockGrowlService = jasmine.createSpyObj('mockGrowlService', ['addNewGrowl']);

    mockEngineerService.getEngineers.and.returnValue(Observable.of([]));
    TestBed
      .configureTestingModule({
        declarations: [
          EngineersComponent
        ],
        providers: [
          { provide: EngineerService, useValue: mockEngineerService },
          { provide: GrowlService, useValue: mockGrowlService }]
      })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(EngineersComponent);
        fixture.detectChanges();
        fixture.whenStable().then(done);
      }).catch(error => {
        done.fail(error);
      });
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should call the engineerService on page init', () => {
    fixture.componentInstance.ngOnInit();
    expect(mockEngineerService.getEngineers).toHaveBeenCalled();
  });

  it('should call the engineerService when getEngineers is called', () => {
    fixture.componentInstance.getEngineers();
    expect(mockEngineerService.getEngineers).toHaveBeenCalled();
  });

  it('should populate the engineers with result', () => {
    fixture.componentInstance.getEngineers();
    expect(fixture.componentInstance.engineers).not.toBeNull();
  });
});
