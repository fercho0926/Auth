import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { UserService } from '../../services/user-management/user/user_OLD.service';
import { Subscription } from 'rxjs';
import { IUser } from '../../types/user-management/user-types';

@Component({
  selector: 'um-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent  {
  users: IUser[] = [];
  sub!: Subscription;

  // constructor(private UserService: UserService) {}

  // ngOnInit(): void {
  //   this.sub = this.UserService.getAllUsers().subscribe((response) => {
  //     this.users = response;
  //   });
  // }
}
