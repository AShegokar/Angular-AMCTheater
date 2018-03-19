import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpModule} from '@angular/http';
import {routes} from './app.routes';
import { AppComponent } from './app.component';
import { InTheatersComponent } from './in-theaters/in-theaters.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { MyRemindersComponent } from './my-reminders/my-reminders.component';
import { HeaderComponent } from './header/header.component';
import {HTTPSerivce} from './httpServices/http.service'

@NgModule({
  declarations: [
    AppComponent,
    InTheatersComponent,
    ComingSoonComponent,
    MyRemindersComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HTTPSerivce],
  bootstrap: [AppComponent]
})
export class AppModule { }
