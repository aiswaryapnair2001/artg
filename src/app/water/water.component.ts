import { Component } from '@angular/core';
import { GalleryService } from '../gallery.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.css']
})
export class WaterComponent {
  constructor(private obj:GalleryService,private r:Router){}
    waterdb=this.obj.getwtDB();
    gototradipage(id:any)
    {
      localStorage.setItem('id',id)
      this.r.navigate(['/singlewt'])
    }
  

}
