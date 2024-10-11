import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { FiatBrandComponent } from './Components/fiat-brand/fiat-brand.component';
import { FordBrandComponent } from './Components/ford-brand/ford-brand.component';
import { AudiBrandComponent } from './Components/audi-brand/audi-brand.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { BrandComponent } from './Components/brand/brand.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FiatBrandComponent,
    FordBrandComponent,
    AudiBrandComponent,
    NotFoundComponent,
    BrandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
