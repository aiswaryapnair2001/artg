import { Component } from '@angular/core';
import { GalleryService } from '../gallery.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-spray',
  templateUrl: './spray.component.html',
  styleUrls: ['./spray.component.css']
})
export class SprayComponent {
  
    constructor(private obj:GalleryService,private r:Router){}
    spraydb=this.obj.getspDB();
    gototradipage(id:any)
    {
      localStorage.setItem('id',id)
      this.r.navigate(['/singlesp'])
    }
  
  

}
