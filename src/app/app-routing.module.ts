import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component'
import { UsersComponent } from './users/users.component'
import { DoctorsignupComponent } from './doctorsignup/doctorsignup.component'
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component'
import { DoctorsComponent } from './doctors/doctors.component'
import { DoctorinfoComponent } from './doctorinfo/doctorinfo.component'
import { TestComponent } from './test/test.component'
import { ChildComponent } from './child/child.component'
import { ParentComponent } from './parent/parent.component'

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'user/:id', component:UsersComponent},
  {path:'doctorsignup', component:DoctorsignupComponent},
  {path:'doctorlogin', component:DoctorloginComponent},
  {path:'doctors', component:DoctorsComponent},
  {path:'doctor-info/:id', component:DoctorinfoComponent},
  {path:'test', component: TestComponent},
  {path:'child', component: ChildComponent},
  {path:'parent', component: ParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
