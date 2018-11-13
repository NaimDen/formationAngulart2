import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ListeCoursComponent} from './component/liste-Cours/listeCours.component';
import {CoursComponent} from './component/cours/cours.component';
import { QcmComponent } from './qcm/qcm.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeCoursComponent,
    CoursComponent,
    QcmComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
