import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {User} from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

export class UsersListComponent implements OnInit {

  users: User[] = []

  constructor(private userService: UserService) { }


  ngOnInit() {
    this.getUsers()
  };

  
  getUsers(): void {

    this.userService.getUsers()
      .subscribe(data => data.forEach(user => {
        this.users.push(new User(user, false, ''));
      }));
  }

  deleteUsers(): void {
    
    const usersToDelete = this.users.filter(user => user.selected && user.status != 'deleted');
    
    this.deleteUsersSync(usersToDelete);
  }

  selectAll(): void {
    this.users.map( user => user.selected = true );
  }


  private deleteUsersSync(users): void {
    
    if ( !users.length ) {
      return;
    }

    const user = users.pop();

    this.userService.deleteUser(user.name).subscribe(
      () => { 
        user.status = 'deleted';
        this.deleteUsersSync(users);
      }
    )
    
  }

}
