import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';

import { StartPageComponent } from './components/start-page/start-page.component';

const loginRoute = {
  path: 'login',
  component: LoginComponent
}

const signupRoute = {
  path: 'signup',
  component: SignupComponent
}

const routes: Routes = [
  { path: 'startpage', component: StartPageComponent, children: [
    loginRoute,
    signupRoute
    ]
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
