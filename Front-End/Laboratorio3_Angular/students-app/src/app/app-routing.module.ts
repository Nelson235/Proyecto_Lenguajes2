import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleAddComponent } from './role-add/role-add.component';
import { VehiculeListComponent } from './vehicule-list/vehicule-list.component';
import { VehiculeAddComponent } from './vehicule-add/vehicule-add.component';
import { SpaceListComponent } from './space-list/space-list.component';
import { RateListComponent } from './rate-list/rate-list.component';

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'user-list',component: UserListComponent},
  {path:'login',component: LoginComponent},
  {path:'students',component: StudentListComponent},
  {path:'student-add',component: StudentAddComponent},
  {path:'role-list',component: RoleListComponent},
  {path:'role-add',component: RoleAddComponent},
  {path:'vehicule-list',component: VehiculeListComponent},
  {path:'rate-list',component: RateListComponent},
  {path:'space-list',component: SpaceListComponent},
  {path:'login',component: LoginComponent},


  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
