import { async,fakeAsync, ComponentFixture, TestBed ,inject} from '@angular/core/testing';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Location, CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports:[CommonModule,RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get nav-item length', () => {
    const el = fixture.debugElement.nativeElement;
    expect(el.querySelectorAll('.nav-item').length).toBe(3);
  });

  it('should go to url', fakeAsync((inject([Router, Location], (router: Router, location: Location) => {
      let anchorLinks,a1,a2,a3;
    fixture.detectChanges();
    //Create an array of anchor links
    anchorLinks= fixture.debugElement.queryAll(By.css('a'));
      a1 = anchorLinks[0];
      a2 = anchorLinks[1];
      a3 = anchorLinks[2];
      //Simulate click events on the anchor links
    let href1 =a1.nativeElement.getAttribute('href');
     expect(href1).toEqual("/intheaters");
    let href2 =a2.nativeElement.getAttribute('href');
      expect(href2).toEqual("/comingsoon");
    let href3 =a3.nativeElement.getAttribute('href');
      expect(href3).toEqual("/myreminders");

    }))));
});
