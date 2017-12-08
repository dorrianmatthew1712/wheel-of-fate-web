import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleComponent } from './schedule.component';
import { Observable } from 'rxjs';
import { ScheduleService, GrowlService } from '../services';

describe('ScheduleComponent', () => {
  let fixture: ComponentFixture<ScheduleComponent>;
  let mockScheduleService: any;
  let mockGrowlService: any;

  beforeEach((done) => {
    mockScheduleService = jasmine.createSpyObj('mockScheduleService', ['generateNewSchedule']);
    mockGrowlService = jasmine.createSpyObj('mockGrowlService', ['addNewGrowl']);

    mockScheduleService.generateNewSchedule.and.returnValue(Observable.of([]));

    TestBed
      .configureTestingModule({
        declarations: [
          ScheduleComponent
        ],
        providers: [
          { provide: ScheduleService, useValue: mockScheduleService },
          { provide: GrowlService, useValue: mockGrowlService }]
      })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(ScheduleComponent);
        fixture.componentInstance.showLoading = false;
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
    expect(mockScheduleService.generateNewSchedule).toHaveBeenCalled();
  });

  it('should call the engineerService when getEngineers is called', () => {
    fixture.componentInstance.generateSchedule();
    expect(mockScheduleService.generateNewSchedule).toHaveBeenCalled();
  });

  it('should populate the engineers with result', () => {
    fixture.componentInstance.generateSchedule();
    expect(fixture.componentInstance.schedule).not.toBeNull();
  });

  it('should show/hide the schedule details when schedule exists', () => {
    fixture.componentInstance.schedule = <any>{};
    fixture.componentInstance.showLoading = false;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('#scheduleDiv')).not.toBeNull();
    expect(fixture.nativeElement.querySelector('.loading')).toBeNull();
    expect(fixture.componentInstance.showLoading).toBeFalsy();

    fixture.componentInstance.schedule = null;
    fixture.componentInstance.showLoading = true;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('#scheduleDiv')).toBeNull();
    expect(fixture.nativeElement.querySelector('.loading')).not.toBeNull();
  });

  it('should display the created date in the title', () => {
    fixture.componentInstance.schedule = <any>{ createdDate: 1512706650300 };
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('#title').innerHTML).toBe('New BAU Schedule: Dec 8 17 04:17');
  });

  it('should display a card for each shift with the correct details', () => {
    fixture.componentInstance.schedule = <any>{
      createdDate: 1512706650300, shifts: [
        { engineer: { firstName: 'Test', lastName: 'Name', position: 'Position' } },
        { engineer: { firstName: 'Test 2', lastName: 'Name 2', position: 'Position 2' } },
        { engineer: { firstName: 'Test 3', lastName: 'Name 3', position: 'Position 3' } },
      ]
    };
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.card').length).toBe(3);

    expect(fixture.nativeElement.querySelectorAll('.card-title')[0].innerHTML).toBe('Test Name');
    expect(fixture.nativeElement.querySelectorAll('.card-title')[1].innerHTML).toBe('Test 2 Name 2');
    expect(fixture.nativeElement.querySelectorAll('.card-title')[2].innerHTML).toBe('Test 3 Name 3');

    expect(fixture.nativeElement.querySelectorAll('.shift')[0].innerHTML).toBe('Shift 1 (AM)');
    expect(fixture.nativeElement.querySelectorAll('.shift')[1].innerHTML).toBe('Shift 2 (PM)');
    expect(fixture.nativeElement.querySelectorAll('.shift')[2].innerHTML).toBe('Shift 3 (AM)');
  });
});
