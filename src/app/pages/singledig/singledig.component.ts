import { Component } from '@angular/core';
import { GalleryService } from 'src/app/gallery.service';
@Component({
  selector: 'app-singledig',
  templateUrl: './singledig.component.html',
  styleUrls: ['./singledig.component.css']
})
export class SingledigComponent {
  dig:any
  constructor(private d:GalleryService){}
  ngOnInit(){
    let idd:any=localStorage.getItem('id')
    let arrd=this.d.getdgDB();
    this.dig=arrd.filter(e=>e.title==idd)
   
  }
}
