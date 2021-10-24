import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { EditAppareilComponentComponent } from './edit-appareil-component/edit-appareil-component.component';
import { AppareilServiceComponent } from './appareil-service/appareil-service.component';

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    EditAppareilComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [
    AppareilServiceComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

