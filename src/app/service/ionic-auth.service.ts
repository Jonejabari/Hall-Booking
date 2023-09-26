import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class IonicAuthService {

  collectionName = 'Users';

  constructor(private angularFireAuth: AngularFireAuth) { }

  loginFireauth(value){
    return new Promise<any> ((resolve, reject)=> {
      this.angularFireAuth.signInWithEmailAndPassword(value.email, value.password).then(
        res => resolve(res),
        error => reject(error)
      );
    });
  }

  userRegistration(value){
    return new Promise<any> ((resolve, reject) =>{
      this.angularFireAuth.createUserWithEmailAndPassword(value.email,value.password).then(
        res => resolve(res),
        error => reject(error)
        );
    });
  }

}
