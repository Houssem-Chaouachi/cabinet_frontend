import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthSecretaireGuard } from './auth-secretaire.guard';
import { AuthGuard } from './auth.guard';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
// import { ResetPasswordComponent } from './reset-password/reset-password.component';


import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginPatientsComponent } from './views/login-patients/login-patients.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    data: {
      title: 'forgot password'
    }
  },
  {
    path: 'response-reset-password/:token',
    component: ResetPasswordComponent,
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login-secretaires',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'login-Patients',
    component: LoginPatientsComponent,
    data: {
      title: 'LoginPatient Page'
    }
  },
  {
    path: 'register-patients',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    },
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard/:idsecretaire',
        canActivate: [AuthGuard],
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'icons',
        canActivate: [AuthGuard],
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        canActivate: [AuthGuard],
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'secretaire/:id',
        canActivate: [AuthSecretaireGuard],
        loadChildren: () => import('./secretaire/secretaire/secretaire.module').then(m => m.SecretaireModule)
      },

      {
        path: 'widgets',
        canActivate: [AuthGuard],
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
