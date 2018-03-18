import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl } from '@angular/forms';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

interface Contact{
 name:string;
 email:string;
 mobile:number;
 description:string;
 modules:string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {

   contactColl:AngularFirestoreCollection<Contact>;
   contacts:Observable<Contact[]>;
   contactDoc:AngularFirestoreDocument<Contact>;
  constructor(private afs:AngularFirestore) {

   }
  form;


  ngOnInit() {
    this.form=new FormGroup({
     name:new FormControl(""),
     email:new FormControl(""),
     mobile:new FormControl(""),
     address:new FormControl(""),
     mods:new FormControl("")
     
    });

    /*this.contactColl= this.afs.collection('contact');
    this.contacts=this.contactColl.valueChanges();
  console.log(this.contacts);*/
    this.contacts=this.afs.collection('contact')
                   .snapshotChanges().map(
      changes=>{return changes.map(a=>{
        const data = a.payload.doc.data() as Contact;
       const id = a.payload.doc.id;
        return { id, ...data };
      });
    });

  }

       onSubmit=function(users){
        console.log(users);
          this.afs.collection('contact').add({
            'name':users.name,
            'email':users.email,
            'mobile':users.mobile,
            'description':users.address,
            'modules':users.mods
          });   
       
       }

       getDelete(event,contact){
         this.contactDoc= this.afs.doc('contact/${id}');
         this.contactDoc.delete();
       }

 }
