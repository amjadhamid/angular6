import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

// السيناريو كالتالي تاخذ المستخدم عن طريق الاوبسيرفيبال
user: Observable<firebase.User>;
//ثم تعين متغير منطقي لتحديد اذا كنت مسجل وبالشكل الطبيعي يكون غير مسجل
private isLoggIn: Boolean= false ;
//
// isLoggInStatus: Boolean = false;
// تعين متغير بالايميل
private email: string ;


// في الانطلاقة تعين اوبجيكت من كلاس فاير اوث وراوتر
  constructor( public afAuth: AngularFireAuth , public router:Router) { 
 

//  the status is like the localstorage which chenge by two function login logout
let status = localStorage.getItem('isLoggInStatus')
console.log(status)
if (status === 'true'){
// isLoggin
  this.isLoggIn = true ;
}else{
this.isLoggIn = false ;
  
}

//  ويكون المستخدم هو حالة المستخدم في هذا الاوبجيكت
    this.user = afAuth.authState;
 

//  this function in constractor
//  تحدد وظيفة عند تغير حالة المستتخدم يتغير حينها المتغير المنطقي 
 firebase.auth().onAuthStateChanged(function(user){
  if(user){
this.isLoggIn = true ; 

  }else{
     this. isLoggIn = false ; 
     this.router.navigate(['/login'])

  }
});

 }




  ngOnInit() {
  }
 

// log out in firebase doc
//
logout(){
  this.afAuth.auth.signOut();
  this.isLoggIn = false ;
  // localStorage.setItem('isLoggInStatus','false')
 this.router.navigate(['/login'])

}



}
