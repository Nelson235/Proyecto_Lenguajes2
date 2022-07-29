import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentAddValidateComponent } from './student-add-validate/student-add-validate.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { VehiculeAddComponent } from './vehicule-add/vehicule-add.component';
import { VehiculeListComponent } from './vehicule-list/vehicule-list.component';
import { VehiculeDetailsComponent } from './vehicule-details/vehicule-details.component';
import { LoginComponent } from './login/login.component';
import { VehiculeTypeAddComponent } from './vehicule-type-add/vehicule-type-add.component';
import { VehiculeTypeListComponent } from './vehicule-type-list/vehicule-type-list.component';
import { VehiculeTypeDetailsComponent } from './vehicule-type-details/vehicule-type-details.component';
import { RateListComponent } from './rate-list/rate-list.component';
import { RateAddComponent } from './rate-add/rate-add.component';
import { RateDetailsComponent } from './rate-details/rate-details.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleAddComponent } from './role-add/role-add.component';
import { RoleDetailsComponent } from './role-details/role-details.component';
import { SpaceListComponent } from './space-list/space-list.component';
import { SpaceAddComponent } from './space-add/space-add.component';
import { SpaceDetailsComponent } from './space-details/space-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';//INPUT
import { MatSelectModule } from '@angular/material/select';//INPUT
import { HomeComponent } from './home/home.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { DependentNavbarComponent } from './dependent-navbar/dependent-navbar.component';



const appRoutes: Routes = [
  {
    path: 'students',
    component: StudentListComponent,
    data: { title: 'Student List' }
  }, {
    path: 'student-add',
    component: StudentAddComponent,
    data: { title: 'Student Add' }

  }, {
    path: 'student-add-validate',
    component: StudentAddValidateComponent,
    data: { title: 'Student Add Validate' }

  },
  {
    path: 'user-list',
    component: UserListComponent,
    data: { title: 'User List' }
  },
  {
    path: 'user-add',
    component: UserAddComponent,
    data: { title: 'User Add' }
  },
  {
    path: 'user-details/:email',
    component: UserDetailsComponent,
    data: { title: 'User Details' }
  },
  {
    path: 'vehicule-add',
    component: VehiculeAddComponent,
    data: { title: 'Vehicule Add' }
  },
  {
    path: 'vehicule-details/:id',
    component: VehiculeDetailsComponent,
    data: { title: 'Vehicule Details' }
  },
  {
    path: 'vehicule-list',
    component: VehiculeListComponent,
    data: { title: 'Vehicule List' }
  },
  {
    path: 'rate-list',
    component: RateListComponent,
    data: { title: 'Rate List' }
  },
  {
    path: 'rate-add',
    component: RateAddComponent,
    data: { title: 'Rate Add' }
  },
  {
    path: 'rate-details/:id',
    component: RateDetailsComponent,
    data: { title: 'Rate Details' }
  },
  {
    path: 'space-list',
    component: SpaceListComponent,
    data: { title: 'Space List' }
  },
  {
    path: 'space-add',
    component: SpaceAddComponent,
    data: { title: 'Space Add' }
  },
  {
    path: 'space-details/:id',
    component: SpaceDetailsComponent,
    data: { title: 'Space Details' }
  },
  {
    path: 'role-list',
    component: RoleListComponent,
    data: { title: 'Role List' }
  },
  {
    path: 'role-add',
    component: RoleAddComponent,
    data: { title: 'Role Add' }
  },
  {
    path: 'role-details/:id',
    component: RoleDetailsComponent,
    data: { title: 'Role Details' }
  },
  {
    path: 'vehicule-type-list',
    component: VehiculeTypeListComponent,
    data: { title: 'Vehicule Type Add' }
  },
  {
    path: 'vehicule-type-add',
    component: VehiculeTypeAddComponent,
    data: { title: 'Vehicule Type Add' }
  },
  {
    path: 'vehicule-type-details/:id',
    component: VehiculeTypeDetailsComponent,
    data: { title: 'Vehicule Type Details' }
  },
  {
    path: 'student-details/:id',
    component: StudentDetailsComponent,
    data: { title: 'Student Details' }

  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Parking Login' }
  },
  {
    path: 'menu-admin',
    component: AdminNavbarComponent,
    data: { title: 'Menu Admin' }
  },
  {
    path: 'menu-user',
    component: UserNavbarComponent,
    data: { title: 'Menu User' }
  },
  {
    path: 'menu-depen',
    component: DependentNavbarComponent,
    data: { title: 'Menu Dependent' }
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }

];

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentAddComponent,
    StudentDetailsComponent,
    StudentAddValidateComponent,
    UserListComponent,
    UserAddComponent,
    VehiculeAddComponent,
    VehiculeListComponent,
    VehiculeDetailsComponent,
    LoginComponent,
    VehiculeTypeListComponent,
    VehiculeTypeAddComponent,
    VehiculeTypeDetailsComponent,
    RateListComponent,
    RateAddComponent,
    RateDetailsComponent,
    RoleListComponent,
    RoleAddComponent,
    RoleDetailsComponent,
    SpaceListComponent,
    SpaceAddComponent,
    SpaceDetailsComponent,
    UserDetailsComponent,
    HomeComponent,
    AdminNavbarComponent,
    UserNavbarComponent,
    DependentNavbarComponent
  ],
  imports: [
      RouterModule.forRoot(appRoutes),
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      MatTableModule,
      MatButtonModule,
      MatInputModule,
      MatSelectModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
