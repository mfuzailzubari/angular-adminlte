import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { PageComponent } from './page/page.component';


const routes: Routes = [
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'widgets', component: WidgetsComponent },
  {
    path: '', component: PageComponent, children: [
      {path: 'dashboard', component: DashboardComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
