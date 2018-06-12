import { Component, OnInit } from '@angular/core';
import {   AngularFireDatabase , AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {


email:string ;
myUid:string ;


// for edit
 $key:string = '' ;   

   name : '';
  phone : '';
  addres: '';
  age: '' ;
  skill : '' ;
  place:string ;
  price:string;
  notes:string ;
  email:string;
//for add
  itemList: AngularFireList<any>;
  
  itemArray= []

  userkey:string ;

  constructor(public db:AngularFireDatabase , public router:Router) { 
    
    this.email = localStorage.getItem('email')
    this.myUid = localStorage.getItem('uid')


//
    this.itemList = db.list('skills');
   this.itemList.snapshotChanges()
   .subscribe(actions=>{
     actions.forEach(action => {
      
      let y =  action.payload.toJSON()
       //      console.log( action.payload.toJSON())
     //        console.log( action.payload.child('uid').val())

      y['$key'] = action.key

    

      this.itemArray.push(y as ListItemClass)
      this.userkey = action.key
              this.name = this.itemArray[0]['name']
              this.phone = this.itemArray[0]['phone']
              this.skill = this.itemArray[0]['skill']
              this.place = this.itemArray[0]['place']
              this.price = this.itemArray[0]['price']
              this.notes = this.itemArray[0]['notes']
              this.email = this.itemArray[0]['email']
 
        console.log(this.userkey)
     
 
     });
   })
       console.log(this.itemList)


  }

  ngOnInit() {
    console.log(this.email)
        console.log(this.myUid)

  }



// 
onEdit(){


 // set(first parameter to detect the spsific value , second the changes)
 this.itemList.set( this.userkey ,{
 name : this.name ,
 phone : this.phone ,
 skill :  this.skill ,
 place : this.place ,
 notes : this.notes ,
 price : this.price, 
 email : this.email,
 uid : this.myUid
})
// اول شيء تاتي القيم من الفورم ثم تعدل ثم يعاد تفريغ المصفوفة
this.itemArray = []
this.router.navigate(['/myskill'])


  //  console.log($key  + "  name : " + this.name)


}

onDelete($key){

 this.itemList.remove($key);
 this.itemArray = []

}


}



// 
export class ListItemClass{
 $key:string ;   
  name:string  ;
  phone:string ;
  skill:string ;
  place:string ;
  price:string;
  notes:string ;
  job :string ;
  email:string;
}
