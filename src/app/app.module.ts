import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContainerComponent } from './container/container.component';
import { SliderComponent } from './components/slider/slider.component';
import { HomeComponent } from './pages/home/home.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RouterModule,Routes } from '@angular/router';
import {ModsRoutingModule } from './pages/modules/mods-routing/mods-routing.module'; 
import { ModulesComponent } from './pages/modules/modules.component';
import { AdminComponent } from './pages/modules/admin/admin.component';
import { TeacherComponent } from './pages/modules/teacher/teacher.component';
import { ParentComponent } from './pages/modules/parent/parent.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

 const route:Routes=[
      {
        path:'modules',
        redirectTo:"/modules",
        pathMatch:'full'
        
      },
      {
        path:'about',
        component:AboutComponent,
        
      },
      {
        path:'',
        component:ContainerComponent
      },
      {
        path:'contact',
        component:ContactComponent
        
      },
     
    ];
    var firebaseConfig={
    apiKey: "AIzaSyCPXOpj31HYZREfTao_97N1ZPtZrqJtG1k",
    authDomain: "digeerp-dfb99.firebaseapp.com",
    databaseURL: "https://digeerp-dfb99.firebaseio.com",
    projectId: "digeerp-dfb99",
    storageBucket: "digeerp-dfb99.appspot.com",
    messagingSenderId: "781471522457"
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ContainerComponent,
    SliderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ModulesComponent,
    AdminComponent,
    TeacherComponent,
    ParentComponent,
   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ModsRoutingModule,
     RouterModule.forRoot(route),
     AngularFireModule.initializeApp(firebaseConfig),
     AngularFirestoreModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
