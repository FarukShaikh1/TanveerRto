import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RouterModule } from '@angular/router';
import {
  ActionConstant,
  ApplicationModules,
  ApplicationRoles,
  NavigationURLs
} from '../../../utils/application-constants';
import { Header } from '../shared/header/header';
import { Footer } from '../shared/footer/footer';
// import { Toaster } from '../shared/toaster/toaster';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    Header,
    Footer,
    RouterModule,
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home implements OnInit, AfterViewInit {

  Modules = ApplicationModules;
  ActionConstant = ActionConstant;
  currentModuleName: string = '';
  NavigationURLs = NavigationURLs;
  userName: string = '';
  roleName: string = '';
  roles = ApplicationRoles;
  formDetails: any;
  unreadSystemNotificationCount = 0;

  constructor(
    private route: ActivatedRoute,
    public router: Router,

  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.setDropDownColor();
  }

  clientList() {
    this.router.navigate([NavigationURLs.CLIENT_LIST]);
  }

  userList() {
    this.router.navigate([NavigationURLs.USER_LIST]);
  }

  chatSystem() {
    this.router.navigate([NavigationURLs.NAV_CHAT_PANEL]);
  }

  setDropDownColor() {
    const dropdownButton = document.getElementById('statusDropdown');
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    dropdownItems.forEach((item) => {
      item.addEventListener('click', function (event) {
        event.preventDefault();


        const status = item.getAttribute('data-status');
        const color = item.getAttribute('data-color');


        if (color && status && dropdownButton) {
          dropdownButton.innerHTML = `<span class="dot ${color}"></span> ${status}`;
        }
      });
    });
  }

  isUrlContains(urlEndPoint: string): boolean {
    const routePath = this.router.url;
    return routePath.includes(urlEndPoint);
  }
}
