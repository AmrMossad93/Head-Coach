import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/Pages/home/home.component';
import { SettingPageComponent } from './Components/Pages/setting-page/setting-page.component';
import { SportsPageComponent } from './Components/Pages/sports-page/sports-page.component';
import { SolutionsPageComponent } from './Components/Pages/solutions-page/solutions-page.component';
import { ProductsPageComponent } from './Components/Pages/products-page/products-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'settings', component: SettingPageComponent },
  { path: 'sports', component: SportsPageComponent },
  { path: 'solutions', component: SolutionsPageComponent },
  { path: 'products', component: ProductsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
