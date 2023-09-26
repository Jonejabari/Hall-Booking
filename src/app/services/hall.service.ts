import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class HallService {

  collectionName = 'hall';

  constructor(private firestore: AngularFirestore) { }

  create_veh(record) {
    return this.firestore.collection(this.collectionName).add(record);
  }

  read_veh() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  update_veh(recordID, record) {
    this.firestore.doc(this.collectionName + '/' + recordID).update(record);
  }

  delete_veh(record_id) {
    this.firestore.doc(this.collectionName + '/' + record_id).delete();
  }
}

