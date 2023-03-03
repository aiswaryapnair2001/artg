import { Component } from '@angular/core';
import { GalleryService } from 'src/app/gallery.service';

@Component({
  selector: 'app-singlewe',
  templateUrl: './singlewe.component.html',
  styleUrls: ['./singlewe.component.css']
})
export class SingleweComponent {
  we:any
  constructor(private d:GalleryService){}
  ngOnInit(){
    let idd:any=localStorage.getItem('id')
    let arrd=this.d.getwesDB();
    this.we=arrd.filter(e=>e.title==idd)
   

  }
}
