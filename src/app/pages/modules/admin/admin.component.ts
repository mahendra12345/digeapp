import { Component, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

interface Student{
 name:string;
 classDivId:number;
 parentId:number;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: []
})
export class AdminComponent implements OnInit {
   studColl:AngularFirestoreCollection<Student>;
   students:Observable<Student[]>;
 constructor(private afs:AngularFirestore){

 }

  ngOnInit() {
    this.studColl= this.afs.collection('student');
    this.students=this.studColl.valueChanges();
    console.log(this.students);
  }

}
