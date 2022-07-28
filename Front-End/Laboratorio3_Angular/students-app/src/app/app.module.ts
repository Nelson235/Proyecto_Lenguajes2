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
    path: 'vehicule-details',
    component: VehiculeDetailsComponent,
    data: { title: 'Vehicule Details' }
  },
  {
    path: 'vehicule-list',
    component: VehiculeListComponent,
    data: { title: 'Vehicule List' }
  },
  {
    path: 'student-details/:id',
    component: StudentDetailsComponent,
    data: {title: 'Student Details'}
  
  },
  { path: '',
    redirectTo: '/students',
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
    VehiculeDetailsComponent
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