import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'panel',
    pathMatch: 'full'
  },
  {
    path: 'user-login',
    loadChildren: () => import('./user-login/user-login.module').then( m => m.UserLoginPageModule)
  },
  {
    path: 'user-sign-up',
    loadChildren: () => import('./user-sign-up/user-sign-up.module').then( m => m.UserSignUpPageModule)
  },
  {
    path: 'user-dashboard',
    loadChildren: () => import('./user-dashboard/user-dashboard.module').then( m => m.UserDashboardPageModule)
  },
  {
    path: 'bookings',
    loadChildren: () => import('./bookings/bookings.module').then( m => m.BookingsPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'admin-dashboard',
    loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then( m => m.AdminDashboardPageModule)
  },
  {
    path: 'admin-book',
    loadChildren: () => import('./admin-book/admin-book.module').then( m => m.AdminBookPageModule)
  },
  {
    path: 'admin-feed',
    loadChildren: () => import('./admin-feed/admin-feed.module').then( m => m.AdminFeedPageModule)
  },
  {
    path: 'admin-login',
    loadChildren: () => import('./admin-login/admin-login.module').then( m => m.AdminLoginPageModule)
  },
  {
    path: 'panel',
    loadChildren: () => import('./panel/panel.module').then( m => m.PanelPageModule)
  },
  
  {
    path: 'vehicle-reg',
    loadChildren: () => import('./vehicle-reg/vehicle-reg.module').then( m => m.VehicleRegPageModule)
  },
  {
    path: 'vcars',
    loadChildren: () => import('./vcars/vcars.module').then( m => m.VcarsPageModule)
  },
  {
    path: 'addhall',
    loadChildren: () => import('./addhall/addhall.module').then( m => m.AddhallPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
