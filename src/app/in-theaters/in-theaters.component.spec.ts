import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpModule} from '@angular/http';
import { HTTPSerivce } from '../httpServices/http.service';
import {Observable} from 'rxjs/Observable';
import { InTheatersComponent } from './in-theaters.component';
let  moviesOject={movies:[{
  directors:"Anthony Russo, Joe Russo",
  distributorCode:"BVD",
  distributorId:2369,
  earliestShowingUtc:"2018-04-26T19:00:00Z",
  genre:"ACTION",
  hasScheduledShowtimes:true,
  media:[{posterDynamic:"https://cdn.amctheatres.com/production/2/movies/45900/45873/Poster/198438R1.JPG"}]
}]}

class mockHttpService {

  getRequest() {

    return Observable.of({_embedded:moviesOject});
  }
}

describe('InTheatersComponent', () => {
  let component: InTheatersComponent;
  let fixture: ComponentFixture<InTheatersComponent>;
  let httpSerivce:HTTPSerivce;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InTheatersComponent ],
      imports:[HttpModule],
      providers: [{provide: HTTPSerivce, useClass : mockHttpService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InTheatersComponent);
    component = fixture.componentInstance;
    httpSerivce = TestBed.get(HTTPSerivce);
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Get data from getRequest  service method',() => {
    spyOn(httpSerivce,'getRequest').and.returnValue(moviesOject.movies);
    expect(component.nowPlayingMovies).toBe(moviesOject.movies);
  });
  it('should Get movies length',() => {
    expect(component.nowPlayingMovies.length).toEqual(1);
  });
  it('showOverlay should be true',() => {
    expect(component.showOverlay).toBeTruthy();
  });
  it('showOverlay should be false',() => {
    component.showOverlay=false;
    expect(component.showOverlay).toBeFalsy();
  })
});
