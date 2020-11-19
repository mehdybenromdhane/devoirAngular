import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnoncesComponent } from './annonces/annonces.component';
import { EstimationCoutComponent } from './estimation-cout/estimation-cout.component';
import { ListAnnoncesComponent } from './list-annonces/list-annonces.component';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';


const ROUTES: Routes = [


{path: 'home', component: AppComponent},
{path:'annoncess', component: ListAnnoncesComponent},

{path:'estimation', component: EstimationCoutComponent},




];

@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }