import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  private baseUrl = environment.webService.baseUrl;
  constructor(private http: HttpClient) { }

  getActors(): Observable<any> {
    return this.http.get( this.baseUrl + 'actors');
  }

}
