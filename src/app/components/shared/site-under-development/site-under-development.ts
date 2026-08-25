import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationURLs } from '../../../../utils/application-constants';

@Component({
  selector: 'app-site-under-development',
  standalone: true,
  imports: [],
  templateUrl: './site-under-development.html',
  styleUrl: './site-under-development.css'
})
export class SiteUnderDevelopment {
  NavigationURLs = NavigationURLs;
  alreadyLoggedIn: boolean = true;
  constructor(private router: Router,
  ) {
  }

  ngOnInit() {
    console.log('Site Under Development Loaded');
  }
    goBack(): void {
    this.router.navigate(['home']);
    // this.logoutService.logout();
  }

}
