import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/Pages/home/home.component';
import { SettingPageComponent } from './Components/Pages/setting-page/setting-page.component';
import { TeamMangmentPageComponent } from './Components/Pages/team-mangment-page/team-mangment-page.component';
import { PlayersMangmentPageComponent } from './Components/Pages/players-mangment-page/players-mangment-page.component';
import { ReportPageComponent } from './Components/Pages/report-page/report-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'settings', component: SettingPageComponent},
  {path: 'teamMangments', component: TeamMangmentPageComponent},
  {path: 'playersMangments', component: PlayersMangmentPageComponent},
  {path: 'reports', component: ReportPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
