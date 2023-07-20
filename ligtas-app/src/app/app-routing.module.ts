import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'landingpage',
    loadChildren: () => import('./pages/landingpage/landingpage.module').then( m => m.LandingpagePageModule)
  },
  {
    path: '',
    redirectTo: 'landingpage',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'forgotpass',
    loadChildren: () => import('./pages/forgotpass/forgotpass.module').then( m => m.ForgotpassPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'guide',
    loadChildren: () => import('./pages/guide/guide.module').then( m => m.GuidePageModule)
  },
  {
    path: 'earthquake',
    loadChildren: () => import('./dguide/earthquake/earthquake.module').then( m => m.EarthquakePageModule)
  },
  {
    path: 'floods',
    loadChildren: () => import('./dguide/floods/floods.module').then( m => m.FloodsPageModule)
  },
  {
    path: 'hotlines',
    loadChildren: () => import('./pages/hotlines/hotlines.module').then( m => m.HotlinesPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./pages/report/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'landslide',
    loadChildren: () => import('./dguide/landslide/landslide.module').then( m => m.LandslidePageModule)
  },
  {
    path: 'homefires',
    loadChildren: () => import('./dguide/homefires/homefires.module').then( m => m.HomefiresPageModule)
  },
  {
    path: 'volcanichazard',
    loadChildren: () => import('./dguide/volcanichazard/volcanichazard.module').then( m => m.VolcanichazardPageModule)
  },
  {
    path: 'vehicularaccident',
    loadChildren: () => import('./dguide/vehicularaccident/vehicularaccident.module').then( m => m.VehicularaccidentPageModule)
  },   {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
