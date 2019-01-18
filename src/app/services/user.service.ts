import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
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
  userType = new Subject<string>();
  constructor(private afs: AngularFirestore) {
    this.userCollection = this.afs.collection('users', ref => ref.orderBy('username', 'asc'));
  }

  getListUsers (): Observable<User[]> {
    this.userList = this.afs.collection('users').valueChanges();
    return this.userList;
  }

  getUsers(): Observable<User[]> {
    this.users = this.userCollection.
      snapshotChanges().
      pipe(
        map(incUser => incUser.map(u => {
          const user = u.payload.doc.data() as User;
          // const id = u.payload.doc.userId;
          return user ;
        })));
    return this.users;
  }

  getUser(): Observable<User> {
    this.users = this.userCollection.
      snapshotChanges().
      pipe(
        map(incUser => incUser.map(u => {
          const user = u.payload.doc.data() as User;
          // const id = u.payload.doc.id;
          return user ;
        })));
    return this.user;
  }



  getUserForTable() {
    return this.users;
  }

}
