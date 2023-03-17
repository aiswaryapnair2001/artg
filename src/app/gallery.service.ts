import { Injectable } from '@angular/core';

import { getAuth } from '@angular/fire/auth';
import {Auth,signInWithEmailAndPassword,createUserWithEmailAndPassword} from '@angular/fire/auth';
import { digitaldb, spraydb, traditionaldb, waterdb, westdb } from 'src/assets/data/data';
import { addDoc, collection,Firestore,collectionData, getFirestore } from '@angular/fire/firestore';

import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  userid:any;
  db:any =getFirestore()

  constructor(private router:Router,private auth:Auth,private firestore:Firestore) { }

  gettrdDB(){
    return traditionaldb

  }

  getdgDB(){
    return digitaldb
  }
  getspDB()
  {
    return spraydb
  }
  getwtDB()
  {
    return waterdb
  }
  getwesDB()
  {
    return westdb
  }
  insertData(docRef:any,data:any)
  {
    addDoc(docRef,data)
    .then(()=>{alert("your feedback recorded successfully")})
    .catch((err) => alert(err))

  }
  reg(cred:any){
    createUserWithEmailAndPassword(this.auth,cred.email,cred.password).then(
    () =>{
      this.userid= this.auth.currentUser?.uid;
      const userDetails={
        uid:this.userid,
       
        email:cred.email,
        
        
        
      };
      const docRef = collection(this.firestore,'users');
      addDoc(docRef,userDetails).then(()=>{})
      .catch((err)=>console.log(err.message));
      alert("user created successfully");
      this.router.navigate(['/home']);
  
  
        }
    
    
    
    );
}
}

