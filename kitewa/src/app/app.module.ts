import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routes} from './app.router';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ConceptComponent } from './concept/concept.component';
import { TrainingComponent } from './training/training.component';
import { JoinComponent } from './join/join.component';
import { AboutComponent } from './about/about.component';
import { LocationComponent } from './location/location.component';
import { PicturesComponent } from './pictures/pictures.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ConceptComponent,
    TrainingComponent,
    JoinComponent,
    AboutComponent,
    LocationComponent,
    PicturesComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
