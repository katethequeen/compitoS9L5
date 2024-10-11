import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { FiatBrandComponent } from './Components/fiat-brand/fiat-brand.component';
import { FordBrandComponent } from './Components/ford-brand/ford-brand.component';
import { AudiBrandComponent } from './Components/audi-brand/audi-brand.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { BrandComponent } from './Components/brand/brand.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'fiat-brand',
    component: FiatBrandComponent,
  },
  {
    path: 'ford-brand',
    component: FordBrandComponent,
  },
  {
    path: 'audi-brand',
    component: AudiBrandComponent,
  },
  {
    path: 'brand',
    component: BrandComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
