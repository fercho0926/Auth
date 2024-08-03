import { SharedService } from './../services/shared.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit {
  userEmail = '';

  constructor(private router: Router, private sharedService: SharedService) {}


  ngOnInit(): void {
    const userToken = this.sharedService.getSession();
    if (userToken != null) {
      this.userEmail = userToken.email;
    }
  }

  logout() {
    this.sharedService.deleteSession();
    this.router.navigate(['/login']);
  }
}
