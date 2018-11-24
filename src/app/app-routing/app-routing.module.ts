import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ErrorPageComponent } from '../error-page/error-page.component';
import { RegisterComponent } from '../register/register.component';
import { DonorFormComponent } from '../donor-form/donor-form.component';
import { DonorProfileComponent } from '../donor-profile/donor-profile.component';
import { DonationRequestComponent } from '../donation-request/donation-request.component';

const app_Routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'donor-form', component: DonorFormComponent},
  { path: 'donor-profile', component: DonorProfileComponent},
  { path: 'donation-request', component: DonationRequestComponent},
  { path: 'not-found', component: ErrorPageComponent},
  { path: '**', redirectTo: 'not-found' } // this should always be the last route!
  /* { path: '', redirectTo: '/somewhere-else', pathMatch: 'full' }
   * Since the default matching strategy is "prefix",
   *  Angular checks if the path you entered in the URL does start
   *  with the path specified in the route. Of course every path starts with ''.
   * To fix this behavior, you need to change the matching strategy to "full".
   */
];

@NgModule({
  imports: [
      // RouterModule.forRoot(app_Routes, {useHash: true}) 
      // useHash so your web server doesn't resolve the url before the web client(angular)
      RouterModule.forRoot(app_Routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
