import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpModule } from '@angular/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SafeUrlPipe } from './utils/safe-url.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterComponent } from './register/register.component';
import { DonorFormComponent } from './donor-form/donor-form.component';
import { DonorProfileComponent } from './donor-profile/donor-profile.component';
import { DonationRequestComponent } from './donation-request/donation-request.component';
import { ViewRequestsComponent } from './view-requests/view-requests.component';
import { RequestComponent } from './view-requests/request/request.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorPageComponent,
    SafeUrlPipe,
    NavBarComponent,
    RegisterComponent,
    DonorFormComponent,
    DonorProfileComponent,
    DonationRequestComponent,
    ViewRequestsComponent,
    RequestComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    DragDropModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
