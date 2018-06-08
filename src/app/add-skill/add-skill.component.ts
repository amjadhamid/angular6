import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {   AngularFireDatabase , AngularFireList } from 'angularfire2/database';

//
import { AngularFireAuth } from 'angularfire2/auth';
// import { auth } from 'firebase/app';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {


  name:string = 'Amjad';
  phone:number = 553672572;
  skill:string = 'software engeniring';
  place:string = 'istanbul';
  price:number = 3990;
  notes:string = 'I am a bigginer';
  email:any ;
  uid:any ;


  items: Observable<any[]>;

  itemList: AngularFireList<any>;



  constructor( private afAuth:AngularFireAuth , public db:AngularFireDatabase  , public router:Router) { 
this.itemList = db.list('skills');
  }

  ngOnInit() {
    
   let email2 =  localStorage.getItem('email')


  this.email = email2
    console.log(this.email)
    console.log('-------------')
   this.uid =  localStorage.getItem('uid')
    console.log(this.uid)

    // 
  // this.afAuth.authState.subscribe(auth=>{
  //   if(auth){
  //     this.uid = auth.uid
  //     console.log(this.uid)
  //   }
  // })
  
  }


insertSkill(){
this.itemList.push({
 name : this.name ,
 phone : this.phone ,
 skill :  this.skill ,
 place : this.place ,
 notes : this.notes ,
 price : this.price , 
 email :this.email  ,
 uid : this.uid
})

this.router.navigate(['/myskill'])

} 



}
