import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/gallery.service';
@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {
constructor(private gal:GalleryService){}
data:any
ngOnInit(){

  const dbname = localStorage.getItem('dbname')

  if(dbname === 'trad'){   
   this.data= this.gal.gettrdDB()

  }
  else if (dbname === 'Digital'){
    this.data= this.gal.getdgDB()

  }
  this.ngOnInit()
}
}
