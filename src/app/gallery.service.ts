import { Injectable } from '@angular/core';
import { digitaldb, spraydb, traditionaldb, waterdb, westdb } from 'src/assets/data/data';
@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor() { }

  gettrdDB(){
    return traditionaldb

  }

  getdgDB(){
    return digitaldb
  }
  getspDB()
  {
    return spraydb
  }
  getwtDB()
  {
    return waterdb
  }
  getwesDB()
  {
    return westdb
  }
}
