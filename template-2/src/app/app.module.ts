import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NoPageComponent } from './component/no-page/no-page.component';
import { AboutComponent } from './component/about/about.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AboutMeComponent } from './component/about-me/about-me.component';
import { AboutCompanyComponent } from './component/about-company/about-company.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoPageComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    AboutMeComponent,
    AboutCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})

export class AppModule {
}
