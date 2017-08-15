import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

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


export const router: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'}, 
    {path: 'about', component: AboutComponent},
    {path: 'concept', component: ConceptComponent},
    {path: 'training', component: TrainingComponent},
    {path: 'join', component: JoinComponent},
    {path: 'location', component: LocationComponent},
    {path: 'pictures', component: PicturesComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'home', component: HomeComponent},





];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);