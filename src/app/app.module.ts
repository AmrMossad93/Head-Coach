import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './Components/Widgets/preloader/preloader.component';
import { HomeComponent } from './Components/Pages/home/home.component';
import { HeaderComponent } from './Components/Layout/header/header.component';
import { LoginComponent } from './Components/Forms/login/login.component';
import { AboutUsComponent } from './Components/Layout/about-us/about-us.component';
import { OwnerTeamComponent } from './Components/Layout/owner-team/owner-team.component';
import { StatmentComponent } from './Components/Layout/statment/statment.component';
import { CaptainServicesComponent } from './Components/Layout/captain-services/captain-services.component';
import { CaptainPortfolioComponent } from './Components/Layout/captain-portfolio/captain-portfolio.component';
import { PricingComponent } from './Components/Layout/pricing/pricing.component';
import { ContactUsComponent } from './Components/Layout/contact-us/contact-us.component';
import { ContactUsFormComponent } from './Components/Forms/contact-us-form/contact-us-form.component';
import { FooterComponent } from './Components/Layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    AboutUsComponent,
    OwnerTeamComponent,
    StatmentComponent,
    CaptainServicesComponent,
    CaptainPortfolioComponent,
    PricingComponent,
    ContactUsComponent,
    ContactUsFormComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
