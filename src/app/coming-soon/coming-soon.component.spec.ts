import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpModule} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { ComingSoonComponent } from './coming-soon.component';
import { HTTPSerivce } from '../httpServices/http.service';

let commingSoonMoviesOject={movies:[{
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

    return Observable.of({_embedded:commingSoonMoviesOject});
  }
}

describe('ComingSoonComponent', () => {
  let component: ComingSoonComponent;
  let fixture: ComponentFixture<ComingSoonComponent>;
  let httpSerivce:HTTPSerivce;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComingSoonComponent ],
      imports:[HttpModule],
      providers: [{provide: HTTPSerivce, useClass : mockHttpService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComingSoonComponent);
    component = fixture.componentInstance;
    httpSerivce = TestBed.get(HTTPSerivce);
    fixture.detectChanges();
  });

  it('should create comingsooncomponent', () => {
    expect(component).toBeTruthy();
  });

  it('Get data from getRequest  service method',() => {
    spyOn(httpSerivce,'getRequest').and.returnValue(commingSoonMoviesOject);
    expect(component.commingSoonMovies).toBe(commingSoonMoviesOject.movies);
  });
  it('should Get movies length',() => {
    expect(component.commingSoonMovies.length).toEqual(1);
  });
});
