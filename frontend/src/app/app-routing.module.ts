import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/user-management/login/login.component';
// import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  // { path: '', loadChildren: () => import('./modules/user-management/user-management.module').then(m => m.UserManagementModule) },
  // { path: 'homepage', loadChildren: () => import('./modules/user-management/user-management.module').then(m => m.UserManagementModule) },
  // { path: 'login', component: LoginComponent },
  // WILDCARD ROUTE
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
