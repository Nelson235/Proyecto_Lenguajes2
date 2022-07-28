import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
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




const appRoutes: Routes = [
  {
    path: 'students',
    component: StudentListComponent,
    data: { title: 'Student List' }
  },{
    path: 'student-add',
    component: StudentAddComponent,
    data: {title: 'Student Add'}
  
  },{
    path: 'student-add-validate',
    component: StudentAddValidateComponent,
    data: {title: 'Student Add Validate'}
  
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
    path: 'rate-details',
    component: RateDetailsComponent,
    data: { title: 'Rate Details' }
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
    data: {title: 'Student Details'}
  
  },
  {
    path: 'login',
    component:LoginComponent,
    data: { title: 'Parking Login' }
  },
  { path: '',
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
    RateDetailsComponent
  ],
  imports: [
      RouterModule.forRoot(appRoutes),
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutingModule,
      HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
