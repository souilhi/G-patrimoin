import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AffaireComponent } from './affaire/affaire.component';

import { PinelComponent } from './pinel/pinel.component';
import { ScpiComponent } from './scpi/scpi.component';
import { SeniorComponent } from './senior/senior.component';
import { TourismeComponent } from './tourisme/tourisme.component';
import { EhpadComponent } from './ehpad/ehpad.component';
import { StudentsComponent } from './students/students.component';
import { ResAffairComponent } from './res-affair/res-affair.component';
import { AboutComponent } from './about/about.component';
import { RecordsformsService } from './recordsforms.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AffaireComponent,
    PinelComponent,
    ScpiComponent,
    SeniorComponent,
    TourismeComponent,
    EhpadComponent,
    StudentsComponent,
    ResAffairComponent,
    AboutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RecordsformsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
