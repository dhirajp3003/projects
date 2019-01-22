import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserNewComponent } from './user-new/user-new.component';

const routes: Routes = [
  {path : '', redirectTo:'/dashboard', pathMatch:'full'},
  {path :'dashboard', component:DashboardComponent},
  {path :'user-list', component:UserlistComponent},
  {path :'new-user', component:UserNewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
