import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: User[] = [];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email'];
  dataSource = new MatTableDataSource<User>();

  constructor(private userService: UserService) {}

  ngOnInit() {
     this.userService.getUsers().subscribe(data => this.dataSource.data = data);
  }



}
