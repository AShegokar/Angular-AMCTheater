import { Component, OnInit } from '@angular/core';
import {Http, URLSearchParams, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import { HTTPSerivce } from '../httpServices/http.service';
@Component({
  selector: 'app-in-theaters',
  templateUrl: './in-theaters.component.html',
  styleUrls: ['./in-theaters.component.css']
})
export class InTheatersComponent implements OnInit {
  nowPlayingMovies=[];
  showOverlay:boolean;
  mainpopup:boolean;
  constructor(private httpService: HTTPSerivce) {
    this.showOverlay=true;
    this.httpService.getRequest('http://localhost:3000/moviesnowplaying').subscribe(data => {
      this.nowPlayingMovies=data._embedded.movies;
    })
  }
  ngOnInit() {
  }
  close(){
    this.showOverlay=false;
  }
  nothanks()
  {
    this.mainpopup=true;
    this.showOverlay=true;
  }
}
