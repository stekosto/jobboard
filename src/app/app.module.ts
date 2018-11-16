import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule} from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '../app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { NoContentComponent } from './components/no-content/no-content.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { environment } from 'src/environments/environment';
import { UserComponent } from './components/user/user.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TestComponent } from './components/test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoContentComponent,
    SignupComponent,
    LoginComponent,
    FooterComponent,
    UserComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
