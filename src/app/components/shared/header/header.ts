import { CommonModule } from "@angular/common";
import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Router } from "@angular/router";

import {
  ActionConstant,
  ApplicationModules,
  ApplicationRoles,
  NavigationURLs
} from "../../../../utils/application-constants";

@Component({
  selector: "app-header",
  templateUrl: "./header.html",
  imports: [ CommonModule],
  styleUrls: ["./header.css"],
  standalone: true,
})
export class Header implements OnInit, OnDestroy {
  @ViewChild("notificationDropdown") notificationDropdown!: ElementRef;
  showNotifications = false;
  NOTIFICATION_INITIAL_PAGE_NO = 1;
  NOTIFICATION_INITIAL_PAGE_SIZE = 5;
  notificationTotalUnreadCount: number = 0;
  showNotificationList: boolean = false;
  isMenuOpen: boolean = false;

  Modules = ApplicationModules;
  ActionConstant = ActionConstant;
  NavigationURLs = NavigationURLs;
  roles = ApplicationRoles;
  loginDisplay = false;
  loggedInUsername: string = "";

  notificationsCount: number = 0;
  alreadyLoggedIn: boolean = true;
  profilePicUrl: string = "../../../assets/icons/user1icon.png";
  ApplicationRoles = ApplicationRoles;
  loggedInUserName: string = "";
  userNameInitials: string = "";
  isDarkMode: boolean = false;


  constructor(
    private router: Router,
  ) {
  }

  ngOnDestroy(): void {
    this.loggedInUsername = "";

  }

  ngOnInit(): void {
    this.setLoginDisplay();
  }


  isActiveMenu(route: string): boolean {

    return this.router.url.includes(route);
  }
  navigate(route: string) {
    this.router.navigate([route]);
  }


  setLoginDisplay() {



  }


  goToProfilePage() {
    this.router.navigate([NavigationURLs.USER_PROFILE]);
  }

  logout() {
  }

  handleConfirmResult(result: any) {
    if (result) {
      this.notificationsCount = 0;
    }
  }

  showLogoutButton(): boolean {
    if (this.alreadyLoggedIn || this.loginDisplay) {
      return true;
    }
    return false;
  }
  navigateToExpenseList() {
    this.router.navigate([NavigationURLs.EXPENSE_LIST]);
  }

  navigateToExpenseSummaryList() {
    this.router.navigate([NavigationURLs.EXPENSE_SUMMARY_LIST]);
  }

  navigateToDayList() {
    this.router.navigate([NavigationURLs.DAY_LIST]);
  }

  navigateToUserList() {
    this.router.navigate([NavigationURLs.USER_LIST]);
  }

  navigateToCurrencyList() {
    this.router.navigate([NavigationURLs.CURRENCY_LIST]);
  }

  navigateToUserPermissions() {
    this.router.navigate([NavigationURLs.ROLE_MODULE_MAPPING]);
  }

  goToPrograms() {
    this.router.navigate([NavigationURLs.PROGRAMS]);
  }

  navigateToChatSystem() {

  }


  goToChangePasswordPage() {
    this.router.navigate([NavigationURLs.CHANGE_PASSWORD]);
  }



  toggleSystemNotificationList() {
    this.showNotificationList = !this.showNotificationList;
  }

  closeSystemNotificationList() {
    this.showNotificationList = false;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


}
