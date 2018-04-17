import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

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
}
