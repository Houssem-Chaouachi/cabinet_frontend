import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { LoginPatientsComponent } from './views/login-patients/login-patients.component';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule} from '@angular/material/button/';
import { MatInputModule } from '@angular/material/input';
import { ToastrModule } from 'ngx-toastr';
import { MatIconModule } from '@angular/material/icon';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UpdateRdvComponent } from './update-rdv/update-rdv.component';
import {  AuthInterceptor } from './interseptor';




@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ToastrModule.forRoot(),
    MatIconModule,
    HttpClientModule,
    MaterialModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    LoginPatientsComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    UpdateRdvComponent,

  ],
  providers: [
  {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
// inti msameha token fel localstorage ?
// eyy wa7da msameha token w lokhra efgh
// inti chemsameha ?
// eyy token msameha 
// run hakeka trah
// ok 
// le le la7dha lezemni nzid el token mta3 el secretaire, khater radithom el zouz esmhom token tawa 
// aw besh nbadel el secretaire w nrani chouf m3aya el passport s7i7 ou nn
// eyy fel postman tjii el token mta3 el secretaire ki na3ml login
// behi e login fel front wini
