import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import * as firebase from 'firebase/app'
import { AngularFirestore } from '@angular/fire/firestore'
import { Router, ResolveEnd } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
isuserLoggedIn = false
  constructor(public auth: AngularFireAuth, public firestore: AngularFirestore, private router: Router) { }

  doFacebookLogin() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      this.auth.auth.signInWithPopup(provider).then(res => {
        resolve(res)
        this.isuserLoggedIn = true
        var user = {
          uid: res.user.uid,
          email: res.user.email,
          role: "user"
        }
        this.firestore.collection("users").add(user)
        .then(res=>{
          console.log(res)
        },err => {
          console.log(err)
        })
      },err => { 
        console.log(err);
        reject(err)
      })
    })
  }
  doGoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider()
      this.auth.auth.signInWithPopup(provider).then(res => {
        resolve(res)
        this.isuserLoggedIn = true
      },err => {
        console.log(err);
        reject(err)
      })
    })
  }
  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password).then(res => {
        this.isuserLoggedIn = true
        console.log(res)
        resolve(res)
        var user = {
          uid: res.user.uid,
          email: res.user.email,
          role: value.role
        }
        this.firestore.collection("users").add(user)
        .then(res=>{
          console.log(res)
        },err => {
          console.log(err)
        })
      }, err => {
        reject(err)
      })
    })
  }
  
  doLogin(values) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(values.email, values.password)
    .then(res => {
      this.firestore.collection('users').ref.where('uid','==',res.user.uid).onSnapshot(snap => {
        snap.forEach(snapref => {
          localStorage.uid = res.user.uid
          localStorage.email = res.user.email
          localStorage.role = snapref.data().role
          resolve(snapref.data())
        })
      }, err => {
        console.log(err)
      })
      this.isuserLoggedIn = true
    }, err => {
      console.log(err)
      this.isuserLoggedIn = false
      reject(err)
    })
    })
  }
  doLogOut() {
    return new Promise<any>((resolve,reject) => {
      firebase.auth().signOut().then(res=>{
        console.log(res)
      },err=>{
        console.log(err)
      })
    })
  }
}
