import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRemindersComponent } from './my-reminders.component';

describe('MyRemindersComponent', () => {
  let component: MyRemindersComponent;
  let fixture: ComponentFixture<MyRemindersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRemindersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRemindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create myreminders component', () => {
    expect(component).toBeTruthy();
  });
  it('Initilizing Component Values', () => {
    expect(component.showsinIn).toBeFalsy();
    expect(component.createaccount).toBeFalsy();
    expect(component.celebratewith).toBeFalsy();
  });
  it('My Reminders component should render  title', () => {
    const el = fixture.debugElement.nativeElement;
    expect(el.querySelector('h5').textContent).toContain('MEMBER EXCLUSIVE');
  });
  it('Should call join now method', () => {
    spyOn(component,'joinNow')
    component.showsinIn=true;
    component.createaccount=true;
    component.celebratewith=false;
    component.joinNow();
    expect(component.showsinIn).toBeTruthy();
    expect(component.createaccount).toBeTruthy();
    expect(component.celebratewith).toBeFalsy();
  });

  it('Should call gotToNext method', () => {
    spyOn(component,'gotToNext')
    component.showsinIn=true;
    component.createaccount=false;
    component.celebratewith=true;
    component.gotToNext();
    expect(component.showsinIn).toBeTruthy();
    expect(component.createaccount).toBeFalsy();
    expect(component.celebratewith).toBeTruthy();
  });
  it('Should call goToReminder method', () => {
    spyOn(component,'goToReminder')
    expect(component.showsinIn).toBeFalsy();
    expect(component.createaccount).toBeFalsy();
    expect(component.celebratewith).toBeFalsy();
  });

});
