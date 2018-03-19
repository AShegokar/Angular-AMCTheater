import { Component, OnInit } from '@angular/core';

import { HTTPSerivce } from '../httpServices/http.service';
@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {
  public commingSoonMovies=[];
  constructor(private httpService: HTTPSerivce) {
    this.httpService.getRequest('http://localhost:3000/comming-soon').subscribe(data => {
      this.commingSoonMovies=data._embedded.movies;
   })
   }

  ngOnInit() {
  }

}
