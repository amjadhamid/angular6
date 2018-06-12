import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {   AngularFireDatabase , AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-detailes',
  templateUrl: './detailes.component.html',
  styleUrls: ['./detailes.component.css']
})
export class DetailesComponent implements OnInit {

// for chenge the route 
id:any ; // this is object

//for add the data
  itemList: AngularFireList<any>;
  
  itemArray= []



// for edit
   name : '';
  phone : '';
  skill: '';
  place: '';
  price: '' ;
  notes: '';
  email: '' ;

  constructor(public db:AngularFireDatabase  , private route:ActivatedRoute) 
  
  { 
   // Make the condation to get the specific data of this user
    this.itemList = db.list('skills');
    //
   this.itemList.snapshotChanges()
   .subscribe(actions=>{
     actions.forEach(action => {
      
      let y =  action.payload.toJSON()
      
      y['$key'] = action.key
      // we will made here if condation for the id to puch the data
      if (action.key === this.id['id']){

      this.itemArray.push(y as ListItemClass)
              this.name = this.itemArray[0]['name']
              this.phone = this.itemArray[0]['phone']
              this.skill = this.itemArray[0]['skill']
              this.place = this.itemArray[0]['place']
              this.price = this.itemArray[0]['price']
              this.notes = this.itemArray[0]['notes']
              this.email = this.itemArray[0]['email']
       
       console.log(this.itemArray[0]['name'])
      }

     });
   })
       console.log(this.itemList)



// for activateed route 
// this.Actroute.params.subscribe(params => console.log(params))
// for activateed route 
this.route.params.subscribe(params =>{  this.id = params }  );

 }

  ngOnInit() {
     console.log(this.id['id'])

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
  email:string ;
}
