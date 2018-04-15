import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User }    from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()


export class UserService {

  private usersUrl = 'http://localhost:3000/users';
  
constructor(
  private http: HttpClient) { }
    
  /** GET users from the server */
  getUsers (): Observable<User[]>{
    return this.http.get<User[]>(this.usersUrl)

  }
}
