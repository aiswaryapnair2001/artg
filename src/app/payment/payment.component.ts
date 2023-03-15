import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  dig:any
  constructor(private d:GalleryService,private router:Router){}
  ngOnInit(){
    let idd:any=localStorage.getItem('id')
    let arrd=this.d.getdgDB();
    this.dig=arrd.filter(e=>e.title==idd)
   
  }
  gotohome(){
    this.router.navigate(['/home'])
  }

}
