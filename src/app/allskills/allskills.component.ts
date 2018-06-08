import { Component, OnInit } from '@angular/core';
import {   AngularFireDatabase , AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allskills',
  templateUrl: './allskills.component.html',
  styleUrls: ['./allskills.component.css']
})
export class AllskillsComponent implements OnInit {

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

  constructor(public db:AngularFireDatabase  , public router:Router) {
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






