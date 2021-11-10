import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Rooms } from './rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
  };

  private baseUrl = "http://localhost:8090";

  constructor( private http: HttpClient,) {  }
  private log(message: string) {
    console.log(`RoomsService: ${message}`);
  }
  getRooms(): Observable<Rooms[]> {
    return this.http.get<Rooms[]>(this.baseUrl+"/rooms")
    .pipe(
      tap(_ => this.log('fetched rooms')),
      catchError(this.handleError<Rooms[]>('getRooms', []))
    );
    
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
