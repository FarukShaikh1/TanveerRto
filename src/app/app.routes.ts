import { Routes } from '@angular/router';
import { RoutePath, RoutePathTitles } from '../utils/application-constants';
import { LandingPage } from './components/landing-page/landing-page';
import { Home } from './components/home/home';
import { RtoHomepageComponent } from './components/rto/rto-homepage/rto-homepage.component';
import { RtoOwnerComponent } from './components/rto/rto-owner/rto-owner.component';
import { SiteUnderDevelopment } from './components/shared/site-under-development/site-under-development';

export const routes: Routes = [
  { path: "", redirectTo: RoutePath.HOME, pathMatch: "full" },
  {
    path: "",
    pathMatch: "full",
    component: RtoHomepageComponent,
    title: "Tanveer Daula RTO agent"
  },
  {
    path: "rto-home",
    pathMatch: "full",
    component: RtoHomepageComponent,
    title: "Tanveer Daula RTO agent"
  },
  {
    path: "rto-owner",
    pathMatch: "full",
    component: RtoOwnerComponent,
    title: "Tanveer Daula RTO agent"
  },
  { path: "home", redirectTo: "home", pathMatch: "full" },
    {
    path: 'site-under-development',
    title: 'site-under-development',
    component: SiteUnderDevelopment,
  },
  {
    path: 'home-page',
    title: 'home-page',
    component:LandingPage,
  },
  { path: "**", redirectTo: "" },
]