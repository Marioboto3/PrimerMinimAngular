import { Injectable } from '@angular/core';
import {Url} from './url';
import { HttpClient } from '@angular/common/http';
import {Subject} from '/Users/mario/WebstormProjects/PrimerMinimAngular/src/app/models/Subject';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  url: Url;

  constructor(private http: HttpClient) {
    this.url = new Url();
  }

  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.url.url + '/subject/get');
  }
}
