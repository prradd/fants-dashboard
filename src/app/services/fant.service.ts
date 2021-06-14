import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from 'rxjs';
import {Fant} from "../Fant";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class FantService {
  private apiUrl = 'http://localhost:5000/fants';

  constructor(private http: HttpClient) { }

  getFants(): Observable<Fant[]> {
    return this.http.get<Fant[]>(this.apiUrl);
  }

  deleteFant(fant: Fant): Observable<Fant> {
    const url = `${this.apiUrl}/${fant.id}`;
    return this.http.delete<Fant>(url);
  }

  addFant(fant: Fant): Observable<Fant> {
    return this.http.post<Fant>(this.apiUrl, fant, httpOptions);
  }
}
