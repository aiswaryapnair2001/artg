import { Component } from '@angular/core';
import { GalleryService } from 'src/app/gallery.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-singlesp',
  templateUrl: './singlesp.component.html',
  styleUrls: ['./singlesp.component.css']
})
export class SinglespComponent {
  sp:any
  constructor(private d:GalleryService,private router:Router){}
  ngOnInit(){
    let idd:any=localStorage.getItem('id')
    let arrd=this.d.getspDB();
    this.sp=arrd.filter(e=>e.title==idd)
  }
  gotoHere(id:any){
    localStorage.setItem('id',id);
    this.router.navigate(['payment']);
  }

}
