import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StationInformationComponent } from './station-information/station-information.component';

const routes: Routes = [
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'home/:LineCode', component: HomePageComponent },
  {
    path: 'station-information/:LineCode/:StationCode',
    component: StationInformationComponent
  },
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
