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
import { NavbarComponent } from './Components/Layout/navbar/navbar.component';
import { SettingPageComponent } from './Components/Pages/setting-page/setting-page.component';
import { TeamMangmentPageComponent } from './Components/Pages/team-mangment-page/team-mangment-page.component';
import { PlayersMangmentPageComponent } from './Components/Pages/players-mangment-page/players-mangment-page.component';
import { ReportPageComponent } from './Components/Pages/report-page/report-page.component';
import { HeadPageCarouselComponent } from './Components/Widgets/head-page-carousel/head-page-carousel.component';
import { PlayerCardComponent } from './Components/Widgets/player-card/player-card.component';
import { NewPlayerFormComponent } from './Components/Forms/new-player-form/new-player-form.component';
import { AnalysisPageComponent } from './Components/Pages/analysis-page/analysis-page.component';
import { GuidBoxComponent } from './Components/Widgets/guid-box/guid-box.component';
import { VedioGuidComponent } from './Components/Widgets/vedio-guid/vedio-guid.component';

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
    FooterComponent,
    NavbarComponent,
    SettingPageComponent,
    TeamMangmentPageComponent,
    PlayersMangmentPageComponent,
    ReportPageComponent,
    HeadPageCarouselComponent,
    PlayerCardComponent,
    NewPlayerFormComponent,
    AnalysisPageComponent,
    GuidBoxComponent,
    VedioGuidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
