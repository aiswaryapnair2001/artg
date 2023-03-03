import { Component } from '@angular/core';
import { GalleryService } from 'src/app/gallery.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {
  trd:any
  constructor(private d:GalleryService){}
  ngOnInit(){
    let idd:any=localStorage.getItem('id')
    let arrd=this.d.gettrdDB();
    this.trd=arrd.filter(e=>e.title==idd)    
  }
}
