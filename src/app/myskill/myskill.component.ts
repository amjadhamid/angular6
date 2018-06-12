import { Component, OnInit } from '@angular/core';
import {   AngularFireDatabase , AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myskill',
  templateUrl: './myskill.component.html',
  styleUrls: ['./myskill.component.css']
})
export class MyskillComponent implements OnInit {


// for edit
   name : '';
  phone : '';
  skill: '';
  place: '';
  price: '' ;
  notes: '';



//for add
  itemList: AngularFireList<any>;
  
  itemArray= []

// for validate 
myUid:any

  constructor(public db:AngularFireDatabase  , public router:Router) {
   // Here we get the uid from local storage and put it in a variable
 this.myUid =  localStorage.getItem('uid');


//
    this.itemList = db.list('skills');
   this.itemList.snapshotChanges()
   .subscribe(actions=>{
     actions.forEach(action => {
      
      let y =  action.payload.toJSON()
      
      y['$key'] = action.key


      this.itemArray.push(y as ListItemClass)
       
     });
   })
       console.log(this.itemList)



   }

  ngOnInit() {
  }

editForm($key){
for (let value of this.itemArray) {
  if (value['$key'] == $key) {
   

   this.name = value['name'];
   this.phone = value['phone'];
   this.skill= value['skill'];
   this.place= value['place'];
   this.price= value['price'] ;
   this.notes= value['notes']   ;
    
  }

}

}

// 
onEdit($key){

//  this value came from editForm()
   this.name 
   this.phone 
   this.skill
   this.place
   this.price
   this.notes
 // set(first parameter to detect the spsific value , second the changes)
 this.itemList.set( $key ,{
 name : this.name ,
 phone : this.phone ,
 skill :  this.skill ,
 place : this.place ,
 notes : this.notes ,
 price : this.price 
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




// end the main class
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

}




























//  console.log(this.myage);


  // let myname:string = 'amjad' ;
  // let myage:number = 32;
  // let sen:string = `my name is ${myname} and my age is ${myage}`;
  // console.log(sen);

// Declare a tuple type
// let x: [string, number];
// // Initialize it
// x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error


//  array generetor
// let list: Array<number> = [1, 2, 3];


// THE ENUM is  a new object in the language
// enum Color {Red, Green, Blue}
// let c: Color = Color.Blue;
// console.log(c);


//  any thing
// let notSure: any = 4;
// notSure = "maybe a string instead";
// notSure = false; // okay, definitely a boolean



// this.add(1,1)
// console.log(this.sup(1,4))
// console.log(this.myAdd(1,4))


// }
// end ngOinit




// the function
// in angular you can delete function name 
// 
// Named function
//  add(x, y) {
//    let z = x + y ;
//     console.log (z)
// }


// sup(x, y) {
//     return x + y;
// }

// Anonymous function that mean without name to function
//  myAdd = function(x, y) { return x + y; };
  
//  myAdd = (x, y) => { return x + y; };