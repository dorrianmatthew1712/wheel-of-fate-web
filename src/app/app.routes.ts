import { Routes } from '@angular/router';

import { HomeComponent } from '../app/home';
import { ScheduleComponent } from '../app/schedule';
import { EngineersComponent } from '../app/engineers';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'schedule', component: ScheduleComponent },
    { path: 'engineers', component: EngineersComponent }
];
