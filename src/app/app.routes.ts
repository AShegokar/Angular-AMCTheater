import {Routes} from '@angular/router'
import { InTheatersComponent } from './in-theaters/in-theaters.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { MyRemindersComponent } from './my-reminders/my-reminders.component';
export const routes: Routes = [
    {path: '', redirectTo: 'intheaters', pathMatch: 'full'},  
    {path: 'intheaters', component:InTheatersComponent},
    {path: 'comingsoon', component: ComingSoonComponent},
    {path: 'myreminders', component: MyRemindersComponent}
  ];