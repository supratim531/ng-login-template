import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCompanyComponent } from './component/about-company/about-company.component';
import { AboutMeComponent } from './component/about-me/about-me.component';
import { AboutComponent } from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NoPageComponent } from './component/no-page/no-page.component';
import { RegisterComponent } from './component/register/register.component';
import { AuthGuard } from './guard/auth.guard';
import { DeauthGuard } from './guard/deauth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home | Angular App'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'About | Angular App'
    },
    children: [
      {
        path: 'me',
        component: AboutMeComponent,
        data: {
          title: 'About Myself | Angular App'
        },
      },
      {
        path: 'company',
        component: AboutCompanyComponent,
        data: {
          title: 'About Company | Angular App'
        },
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [DeauthGuard],
    data: {
      title: 'Login | Angular App'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [DeauthGuard],
    data: {
      title: 'Register | Angular App'
    }
  },
  {
    path: '**',
    component: NoPageComponent,
    data: {
      title: '404 Not Found | Angular App'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
