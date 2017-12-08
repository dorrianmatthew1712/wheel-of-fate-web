import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import {
  GrowlModule
} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { routes } from './app.routes';
import { EngineerService, GrowlService, ScheduleService } from './services';
import { EngineersComponent } from './engineers/engineers.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ScheduleComponent,
    EngineersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    GrowlModule,
    RouterModule.forRoot(routes, {useHash: true}),
  ],
  providers: [EngineerService, GrowlService, ScheduleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
