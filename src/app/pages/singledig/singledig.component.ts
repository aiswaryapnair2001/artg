import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GalleryService } from 'src/app/gallery.service';
@Component({
  selector: 'app-singledig',
  templateUrl: './singledig.component.html',
  styleUrls: ['./singledig.component.css']
})
export class SingledigComponent {
  dig:any
  constructor(private d:GalleryService,private router:Router){}
  ngOnInit(){
    let idd:any=localStorage.getItem('id')
    let arrd=this.d.getdgDB();
    this.dig=arrd.filter(e=>e.title==idd)
   
  }
  gotoHere(id:any){
    localStorage.setItem('id',id);
    this.router.navigate(['payment']);
  }
}
