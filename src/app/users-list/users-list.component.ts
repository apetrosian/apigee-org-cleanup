import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User }    from '../user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

export class UsersListComponent implements OnInit {

  constructor(private http: HttpClient) { }

  users: any;

  ngOnInit() {
    this.http.get('/users').subscribe(data => {

        this.users = data;
      })
    };

}
