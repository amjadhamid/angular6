import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

isLoggInStatus: Boolean;
private isLoggIn: Boolean= false ;


email:string = ' ' ;

password:string = ' ' ;

uid:any ;



  constructor(private afAuth:AngularFireAuth  , public router:Router) {
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
    }
  })
  

   // redirect to home page
    this.router.navigate(['/addskill'])

    }).catch(error=>{
      console.error(error)
    })

}



}