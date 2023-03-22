import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GalleryService } from '../gallery.service';
import { collection } from '@firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  dig:any
  gallery: any;
  constructor(private d:GalleryService,private router:Router,private fire:Firestore){}
  ngOnInit(){
    let idd:any=localStorage.getItem('id')
    let arrd=this.d.getdgDB();
    this.dig=arrd.filter(e=>e.title==idd)
   
  }
  gotohome(){
    this.router.navigate(['/home'])
  }
  
  firstname:string='';
  lastname:string='';
  username:string='';
  email:string='';
  address:string='';
  address2:string='';
  country:string='';
  state:string='';
  credit:string='';
  debit:string='';
  paypal:string='';
  name:string='';
  number:string='';
  date:string='';
  cvv:string='';
submit()
{
  const data={
  firstname:this.firstname,
  lastname:this.lastname,
  username:this.username,
  email:this.email,
  address:this.address,
  address2:this.address2,
  country:this.country,
  state:this.state,

  name:this.name,
  number: this.number,
  date:this.date,
  cvv:this.cvv,
  }
  console.log(data);
  const docRef=collection(this.fire,"payment")
  this.d.insertData(docRef,data)
  this.firstname=''
  this.lastname=''
  this.username=''
  this.email=''
  this.address=''
  this.address2=''
  this.country=''
  this.state=''
  this.credit=''
  this.debit=''
  this.paypal=''
  this.name=''
  this.date=''
  this.cvv=''
  alert( 'bookingsuccess')
}
  

}


