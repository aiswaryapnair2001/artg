import { Component } from '@angular/core';
import { GalleryService } from 'src/app/gallery.service';



@Component({
  selector: 'app-singlesp',
  templateUrl: './singlesp.component.html',
  styleUrls: ['./singlesp.component.css']
})
export class SinglespComponent {
  sp:any
  constructor(private d:GalleryService){}
  ngOnInit(){
    let idd:any=localStorage.getItem('id')
    let arrd=this.d.getspDB();
    this.sp=arrd.filter(e=>e.title==idd)
   

}}
