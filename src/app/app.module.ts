import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HttpClientModule } from '@angular/common/http'
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFirestoreModule } from 'angularfire2/firestore'

import { ToastrModule } from 'ngx-toastr'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { NavcardComponent } from './navcard/navcard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DoctorcardComponent } from './doctorcard/doctorcard.component';
import { GridComponent } from './grid/grid.component';
import { BlogsComponent } from './blogs/blogs.component';
import { AdComponent } from './ad/ad.component';
import { OffersComponent } from './offers/offers.component';
import { UsersComponent } from './users/users.component';
import { DoctorlistComponent } from './doctorlist/doctorlist.component';
import { FooterComponent } from './footer/footer.component';
import { DoctorsignupComponent } from './doctorsignup/doctorsignup.component';
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component';
import { environment } from 'src/environments/environment';
import { DoctorsComponent } from './doctors/doctors.component';
import { SearchfilterPipe } from './searchfilter.pipe';
import { DoctorinfoComponent } from './doctorinfo/doctorinfo.component';
import { TestComponent } from './test/test.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SearchbarComponent,
    NavcardComponent,
    LoginComponent,
    SignupComponent,
    DoctorcardComponent,
    GridComponent,
    BlogsComponent,
    AdComponent,
    OffersComponent,
    UsersComponent,
    DoctorlistComponent,
    FooterComponent,
    DoctorsignupComponent,
    DoctorloginComponent,
    DoctorsComponent,
    SearchfilterPipe,
    DoctorinfoComponent,
    TestComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
