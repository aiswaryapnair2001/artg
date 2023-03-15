import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GalleryService } from 'src/app/gallery.service';

@Component({
  selector: 'app-singlewt',
  templateUrl: './singlewt.component.html',
  styleUrls: ['./singlewt.component.css']
})
export class SinglewtComponent {
  wt:any
  constructor(private d:GalleryService,private router:Router){}
  ngOnInit(){
    let idd:any=localStorage.getItem('id')
    let arrd=this.d.getwtDB();
    this.wt=arrd.filter(e=>e.title==idd)
   

}
gotoHere(id:any){
  localStorage.setItem('id',id);
  this.router.navigate(['payment']);
}}
