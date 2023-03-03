import { Component } from '@angular/core';
import { GalleryService } from 'src/app/gallery.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tradi',
  templateUrl: './tradi.component.html',
  styleUrls: ['./tradi.component.css']
})
export class TradiComponent {
  constructor(private obj:GalleryService,private r:Router){}
  traditionaldb=this.obj.gettrdDB();
  gototradipage(id:any)
  {
    localStorage.setItem('id',id)
    this.r.navigate(['/single'])
  }

}
