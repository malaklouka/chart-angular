import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path : 'dash', component : DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes), AdminRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
