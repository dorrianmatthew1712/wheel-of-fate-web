import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { GrowlModule } from 'primeng/primeng';

import { GrowlService } from './services';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Component } from '@angular/core';

@Component({
  template: `<router-outlet></router-outlet>`,
})
export class RouterOutletComponent {
}

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;

  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        RouterOutletComponent
      ],
      imports: [GrowlModule],
      providers: [GrowlService]
    })
    .overrideComponent(RouterOutletComponent, {
      set: {
        template: '',
        selector: 'router-outlet'
      }
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        fixture.whenStable().then(done);
      }).catch(error => {
        done.fail(error);
      });
  });

  it('should create the app', async(() => {
    expect(fixture.componentInstance).toBeTruthy();
  }));
});
