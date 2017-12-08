import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach((done) => {
    TestBed
      .configureTestingModule({
        declarations: [
          HeaderComponent
        ]
      })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(HeaderComponent);
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
