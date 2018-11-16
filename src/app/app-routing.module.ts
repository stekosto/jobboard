import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NoContentComponent } from './components/no-content/no-content.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
import { UserComponent} from './components/user/user.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'test', component: TestComponent },
  { path: 'user', component: UserComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: NoContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
