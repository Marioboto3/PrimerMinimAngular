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

  postSubject(name: object) {
    return this.http.post(this.url.url + '/subject/add', name);
  }

  getSubjectDetail(id: string) {
    return this.http.get(this.url.url + `/subject/get/:${id}`);
  }
  postStudentSubject(ids: object) {
    return this.http.post(this.url.url + '/addNew', ids);
  }
}
