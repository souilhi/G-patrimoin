import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AffaireComponent } from './affaire/affaire.component';
import { PinelComponent } from './pinel/pinel.component';
import { ScpiComponent } from './scpi/scpi.component';
import { EhpadComponent } from './ehpad/ehpad.component';
import { ResAffairComponent } from './res-affair/res-affair.component';
import { TourismeComponent } from './tourisme/tourisme.component';
import { SeniorComponent } from './senior/senior.component';
import { StudentsComponent } from './students/students.component';
import { AboutComponent } from './about/about.component';



const appRoutes: Routes = [
  {path: '', redirectTo :'/home',pathMatch : 'full'  },
  {path: 'home', component: HomeComponent  },
  {path : 'affaire', component : AffaireComponent},
  {path : 'pinel', component : PinelComponent},
  {path : 'scpi', component : ScpiComponent},
  {path : 'ehpad', component : EhpadComponent},
  {path : 'residence_affire', component : ResAffairComponent},
  {path : 'tourisme', component : TourismeComponent},
  {path : 'senior', component : SeniorComponent},
  {path : 'etudiant', component : StudentsComponent},
  {path : 'qui_somme_nous', component : AboutComponent},








];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
