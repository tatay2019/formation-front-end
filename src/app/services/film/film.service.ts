import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Film} from '../../models/film';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private baseUrl = environment.webService.baseUrl;
  constructor(private http: HttpClient) { }

  add(film: Film) {
    return this.http.post(this.baseUrl + 'films', film);
  }

  list(): Observable<any> {
    return this.http.get(this.baseUrl + 'films', );
  }

  remove(id) {
      return this.http.delete(this.baseUrl + 'films/' + id, );
  }

  modify(film) {
    return this.http.put(this.baseUrl + 'films/', film );
  }

  findById(id): Observable<Film> {
    // @ts-ignore
    return this.http.get(this.baseUrl + 'films/' + id);
  }

}
