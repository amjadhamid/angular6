import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// formsmodules library
import { FormsModule } from '@angular/forms';

// for firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

// the component
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddSkillComponent } from './add-skill/add-skill.component';
// the routing
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyskillComponent } from './myskill/myskill.component';
import { AllskillsComponent } from './allskills/allskills.component';
import { AllskillsnpmComponent } from './allskillsnpm/allskillsnpm.component';




// routes is opject and the class is Routes
const routes:Routes = [
  
  { path:'' , redirectTo : 'home' ,pathMatch:'full' }, // localhost:4200
  { path:'home' , component :HomeComponent  },
  { path:'addskill' , component : AddSkillComponent },
  { path:'login' , component : LoginComponent },
  { path:'register' , component : RegisterComponent },
  { path:'myskill' , component : MyskillComponent },
  { path:'allskill' , component : AllskillsComponent },

]




// component
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddSkillComponent,
    LoginComponent,
    RegisterComponent,
    MyskillComponent,
    AllskillsComponent,
    AllskillsnpmComponent
  ],
  //  every thing in importnt area you must import it here
  imports: [
    BrowserModule,
     RouterModule.forRoot(routes),
     FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
  AngularFireDatabaseModule
  ],
  // 
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
