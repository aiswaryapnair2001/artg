import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/gallery.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  ngOnInit(): void {
  }
email:string='';
password:string='';
repeat:string='';
constructor(private auth:GalleryService){}
reg()
{
  const crud =
  {
    email:this.email,
    password:this.password,
    repeat:this.repeat
  }
  this.auth.reg(crud);
  this.email='';
  this.password='';
  this.repeat='';
}
}