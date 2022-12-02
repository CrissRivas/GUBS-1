import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpperMenuComponent } from './components/upper-menu/upper-menu.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { SliderComponent } from './components/slider/slider.component';
import { ManifestoComponent } from './components/manifesto/manifesto.component';
import { ChellengeComponent } from './components/chellenge/chellenge.component';
import { ApproachComponent } from './components/approach/approach.component';
import { LinksComponent } from './components/links/links.component';
import { PrincipesComponent } from './components/principes/principes.component';
import { MainComponent } from './pages/main/main.component';
import { CultureComponent } from './pages/culture/culture.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { RoadmapsComponent } from './pages/roadmaps/roadmaps.component';
import { ConspiraciesComponent } from './pages/conspiracies/conspiracies.component';
import { SwiperModule } from 'swiper/angular';

import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatIconModule} from '@angular/material/icon';

import { NotesComponent } from './components/notes/notes.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    UpperMenuComponent,
    MainMenuComponent,
    SliderComponent,
    ManifestoComponent,
    ChellengeComponent,
    ApproachComponent,
    LinksComponent,
    PrincipesComponent,
    MainComponent,
    CultureComponent,
    BrandsComponent,
    RoadmapsComponent,
    ConspiraciesComponent,
    NotesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    NoopAnimationsModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
