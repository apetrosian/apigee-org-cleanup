import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {User} from './user';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()


export class UserService {

  private usersUrl = 'http://localhost:3000/users';
  
constructor(
  private http: HttpClient) { }
    
  /** GET users from the server */
  getUsers (): Observable<string[]>{
    return this.http.get<string[]>(this.usersUrl)

  }

  /** send DELETE user request */
  deleteUser (id: string): Observable<User>{
    return this.http.delete<User>(`${this.usersUrl}/${id}`, httpOptions).pipe(
      tap(_ => console.log(`deleted user: ${id}`)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
