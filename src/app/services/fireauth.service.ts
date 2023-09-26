import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireauthService {

  collectionName = 'Hall';

  constructor( private firestore: AngularFirestore) { }

  create_broker(record) {
    return this.firestore.collection(this.collectionName).add(record);
  }

  read_broker() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  update_broker(recordID, record) {
    this.firestore.doc(this.collectionName + '/' + recordID).update(record);
  }

  delete_broker(record_id) {
    this.firestore.doc(this.collectionName + '/' + record_id).delete();
  }
}
