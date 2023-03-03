import { Component } from '@angular/core';
import { GalleryService } from '../gallery.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-western',
  templateUrl: './western.component.html',
  styleUrls: ['./western.component.css']
})
export class WesternComponent {
  constructor(private obj:GalleryService,private r:Router){}
    westdb=this.obj.getwesDB();
    gototradipage(id:any)
    {
      localStorage.setItem('id',id)
      this.r.navigate(['/singlewe'])
    }

}
