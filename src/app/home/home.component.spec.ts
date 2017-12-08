import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach((done) => {
    TestBed
      .configureTestingModule({
        declarations: [
          HomeComponent
        ]
      })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(HomeComponent);
        fixture.detectChanges();
        fixture.whenStable().then(done);
      }).catch(error => {
        done.fail(error);
      });
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

});
