import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContainerComponent } from './container/container.component';
import { SliderComponent } from './components/slider/slider.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './main.component.html'
 
})
export class AppComponent {
 
    
    constructor(private afs:AngularFirestore){

    }

    ngOnInit(){

    }
}
