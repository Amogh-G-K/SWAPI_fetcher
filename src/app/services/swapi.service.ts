import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Films } from '../swapiInterface';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  apiUrl = 'https://swapi.dev/api/films';

  constructor(private http: HttpClient) {}

  getFilms(): Observable<Films> {
    return this.http.get<Films>(this.apiUrl);
  }
}
