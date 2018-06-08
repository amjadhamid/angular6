import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';


 // selector 
@Component({
  selector: 'app-root', // {selector}
  templateUrl: './app.component.html', //html file where the javascript work in it
  styleUrls: ['./app.component.css']  //  //css file where the javascript work in it
})

export class AppComponent {
  title = 'Amjad';
    items: Observable<any[]>;
    
  constructor(db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
}
}