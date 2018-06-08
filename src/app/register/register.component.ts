import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

// export the cmponent to all the project
export class RegisterComponent implements OnInit {

// the constructer [starter value of variable]
email:string = ' ' ;

password:string = ' ' ;
  constructor(public fire:AngularFireAuth  , public router:Router) {
  }
  ngOnInit() {
  }


onRegister(){
   this.fire.auth.createUserWithEmailAndPassword(this.email , this.password)
   .then(user => { console.log(this.email)
    this.router.navigate(['/home'])

    }).catch(error=>{
      console.error(error)
    })

}



}
