import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GalleryService } from 'src/app/gallery.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {
  trd:any
  constructor(private d:GalleryService,private router:Router){}
  ngOnInit(){
    let idd:any=localStorage.getItem('id')
    let arrd=this.d.gettrdDB();
    this.trd=arrd.filter(e=>e.title==idd)    
  }
  gotoHere(id:any){
    localStorage.setItem('id',id);
    this.router.navigate(['payment']);
  }
}
