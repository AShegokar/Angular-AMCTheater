import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-reminders',
  templateUrl: './my-reminders.component.html',
  styleUrls: ['./my-reminders.component.css']
})
export class MyRemindersComponent implements OnInit {
  public showsinIn: boolean;
  public createaccount: boolean;
  public celebratewith: boolean;
  constructor() {
    this.showsinIn = false;
    this.createaccount = false;
    this.celebratewith = false;

  }

  ngOnInit() {
  }
  public joinNow(){
    this.showsinIn = true;
    this.createaccount = true;
    this.celebratewith = false;
  }
  public gotToNext(){

    this.showsinIn = true;
    this.createaccount = false;
    this.celebratewith = true;
  }
  public gotoPrevious(){
    this.joinNow();
  }
  public goToReminder(){
    this.showsinIn = false;
    this.createaccount = false;
    this.celebratewith = false;
  }
}
