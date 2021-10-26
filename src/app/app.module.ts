import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { EditAppareilComponentComponent } from './edit-appareil-component/edit-appareil-component.component';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { AppareilsService } from './services/appareils.service';
import { AuthService } from './services/auth.service';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';


const appRoutes: Routes=[
  {path:'appareils',component:AppareilViewComponent },
  { path: 'appareils/:id', component: SingleAppareilComponent },
  {path:'auth',component:AuthComponent},
  {path:'',component:AppareilViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    EditAppareilComponentComponent,
    AuthComponent,
    AppareilViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilsService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

