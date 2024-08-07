import { UserService } from './../services/user.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../../shared/services/shared.service';
import { Login } from '../interfaces/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  formLogin: FormGroup;
  hidePassword: boolean = true;
  showLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private sharedService: SharedService
  ) {
    this.formLogin = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  signIn() {
    this.showLoading = true;
    const request: Login = {
      email: this.formLogin.value.email,
      password: this.formLogin.value.password,
    };

    this.userService.sigIn(request).subscribe(
      (response) => {
        this.showLoading = false;
        this.sharedService.saveSession(response);
        this.router.navigate(['/layout']);
      },
      (error) => {
        this.showLoading = false;
        this.sharedService.showAlert('User or Pass Incorrect', 'Error');
      }
    );
  }
}
