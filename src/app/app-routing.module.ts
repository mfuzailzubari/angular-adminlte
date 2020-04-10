import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  // { path: 'homepage', loadChildren: () => import('./modules/user-management/user-management.module').then(m => m.UserManagementModule) },
  // { path: 'dashboard', component: DashboardComponent },
  // WILDCARD ROUTE
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
