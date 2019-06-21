import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 constructor() {
   const firebaseConfig = {
     apiKey: "AIzaSyB4hG5eTlHF7ixpGbfdXWUqoOWB0GVBBCA",
     authDomain: "bookshelves-projet-angular.firebaseapp.com",
     databaseURL: "https://bookshelves-projet-angular.firebaseio.com",
     projectId: "bookshelves-projet-angular",
     storageBucket: "bookshelves-projet-angular.appspot.com",
     messagingSenderId: "286399958507",
     appId: "1:286399958507:web:77977358809e32b5"
   };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

 }
}
