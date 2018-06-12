import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import {   AngularFireDatabase , AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

isLoggInStatus: Boolean;
private isLoggIn: Boolean= false ;

uid:any ;

email:string = ' ' ;

password:string = ' ' ;


  items: Observable<any[]>;

  itemList: AngularFireList<any>;


  constructor(private afAuth:AngularFireAuth , public db:AngularFireDatabase   , public router:Router) {
      this.itemList = db.list('users');
   this.itemList.snapshotChanges()
   .subscribe(actions=>{
     actions.forEach(action => {
      
      let y =  action.payload.toJSON()
       //      console.log( action.payload.toJSON())
     //        console.log( action.payload.child('uid').val())

      y['$key'] = action.key

    

      this.itemArray.push(y as ListItemClass)
              this.uid = this.itemArray[0]['uid']
              this.email = this.itemArray[0]['email']
 
       console.log()
     
 
     });
   })
       console.log(this.itemList)


  }
  ngOnInit() {
  }



// 
onLogin(){
   // 
   this.afAuth.auth.signInWithEmailAndPassword(this.email , this.password)
   .then(user => { console.log(this.email)
  //   like session in php set value in localStorage
  //  localStorage.setItem('isLoggInStatus','true')
    this.isLoggIn = true ;

     localStorage.setItem('email', this.afAuth.auth.currentUser.email )


   this.afAuth.authState.subscribe(auth=>{
    if(auth){
     localStorage.setItem('uid', auth.uid )
     console.log(auth.uid)
    this.itemList.push({
     email :this.email  ,
     uid : this.uid
     })
    }
  })
  

   // redirect to home page
    this.router.navigate(['/addskill'])

    }).catch(error=>{
      console.error(error)
    })

}



}
export class ListItemClass{
 uid:string ;   

  email:string;
}
