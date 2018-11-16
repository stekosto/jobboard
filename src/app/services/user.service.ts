import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userCollection: AngularFirestoreCollection<User>;
  userDoc: AngularFirestoreDocument<User>;
  users: Observable<User[]>;
  user: Observable<User>;
userList;
  constructor(private afs: AngularFirestore) {
    this.userCollection = this.afs.collection('jobseekers', ref => ref.orderBy('lastName', 'asc'));
  }

  getListUsers (): Observable<User[]> {
    this.userList = this.afs.collection('jobseekers').valueChanges();
    return this.userList;
  }

  getUsers(): Observable<User[]> {
    this.users = this.userCollection.
      snapshotChanges().
      pipe(
        map(incUser => incUser.map(u => {
          const user = u.payload.doc.data() as User;
          const id = u.payload.doc.id;
          return { id, ...user };
        })));
    return this.users;
  }

  getUserForTable() {
    return this.users;
  }

}
