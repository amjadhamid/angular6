import { Component, OnInit } from '@angular/core';
import {   AngularFireDatabase , AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


// just fire storage
import { AngularFireStorage ,AngularFireStorageReference ,AngularFireUploadTask } from 'angularfire2/storage';  // 

import { finalize } from 'rxjs/operators';

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
  // email:string;
  image:string;
  

//for add
  itemList: AngularFireList<any>;
  
  itemArray= []

  userkey:string ;

  ref:AngularFireStorageReference;

  task :AngularFireUploadTask;

  downloadURL:Observable<string>;

 imageUrl='';
 uploadPercent:Observable<number>;
  constructor(private afstorage:AngularFireStorage ,  public db:AngularFireDatabase , public router:Router) { 
    
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
               this.image = this.itemArray[0]['image']

        console.log(this.userkey)
     
 
     });
   })
       console.log(this.itemList)








  }

  ngOnInit() {
    console.log(this.email)
        console.log(this.myUid)
    // this.downloadURL = this.afStorage.ref().getDownloadURL();

  }

upload(event){
    const file = event.target.files[0];
    const filePath = 'name-your-file-path-here';
    const fileRef = this.afstorage.ref(filePath);
    const task = this.afstorage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => this.downloadURL = fileRef.getDownloadURL() )
     )
    .subscribe(url=>{

     if(url){
  this.imageUrl  = url 
  console.log(url)

     }
  console.log(this.imageUrl  )
 this.itemList.set( this.userkey ,{
 name : this.name ,
 phone : this.phone ,
 skill :  this.skill ,
 place : this.place ,
 notes : this.notes ,
 price : this.price, 
 email : this.email,
 uid : this.myUid ,
  image: this.imageUrl
})

  // const id = Math.random().toString(36).substring(2); // to chenge the id to a random name
  // this.ref = this.afstorage.ref(id); // dtetect the place of picture on firebase
  // this.task = this.ref.put(event.target.files[0]) // upload the picture



  // this.downloadURL  = this.task.downloadURL()
    // console.log(this.downloadURL)

//   this.downloadURL.subscribe(url=>{

//      if(url){
//   this.imageUrl  = url 
//   console.log(url)

//      }
//   console.log(this.imageUrl  )
//  this.itemList.set( this.userkey ,{
//  name : this.name ,
//  phone : this.phone ,
//  skill :  this.skill ,
//  place : this.place ,
//  notes : this.notes ,
//  price : this.price, 
//  email : this.email,
//  uid : this.myUid ,
//   image: this.imageUrl
// })
// end the function
   })
   
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
