import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginDialogRouteComponent } from './components/auth/login/login-dialog/login-dialog.component';
import { LostPasswordComponent } from './components/auth/lost-password/lost-password.component';
import { SignupComponent } from './components/auth/signup/signup.component';

import { StartPageComponent } from './components/start-page/start-page.component';

const loginRoute = {
  path: 'login',
  component: LoginDialogRouteComponent
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
  { path: 'lostpassword', component: LostPasswordComponent, children: [
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
