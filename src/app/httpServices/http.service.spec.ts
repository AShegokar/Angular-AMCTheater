import {HTTPSerivce} from './http.service';
import {HttpModule} from '@angular/http';
import { TestBed, inject,async } from '@angular/core/testing';

describe('amc movies  service', () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpModule],
      providers: [
        HTTPSerivce
      ]
    });
  });
  it('Should define http service',
    inject([HTTPSerivce], (httpService) => {
      expect(httpService).toBeDefined();
    }));

});
