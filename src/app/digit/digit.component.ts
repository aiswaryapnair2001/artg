import { Component } from '@angular/core';
import { GalleryService } from '../gallery.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-digit',
  templateUrl: './digit.component.html',
  styleUrls: ['./digit.component.css']
})
export class DigitComponent {
  constructor(private obj:GalleryService,private r:Router){}
  digitaldb=this.obj.getdgDB();
  gototradipage(id:any)
  {
    localStorage.setItem('id',id)
    this.r.navigate(['/singledig'])
  }


}
