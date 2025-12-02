import { Routes } from '@angular/router';
import { RoutePath, RoutePathTitles } from '../utils/application-constants';
import { LandingPage } from './components/landing-page/landing-page';
import { Home } from './components/home/home';

export const routes: Routes = [
  { path: "", redirectTo: RoutePath.HOME, pathMatch: "full" },
  {
    path: RoutePath.HOME,
    title: RoutePathTitles.HOME,
    component:Home,
    children: [
      { path: "", redirectTo: RoutePath.LANDING_PAGE, pathMatch: "full" },
      {
        path: RoutePath.LANDING_PAGE,
        title: RoutePathTitles.LANDING_PAGE,
        component: LandingPage,
      },
    ],
  },
]