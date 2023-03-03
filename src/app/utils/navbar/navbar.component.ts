import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
constructor(private router:Router){}

  getTrd(val:any){
    localStorage.setItem('dbname',val)
    this.router.navigate(['/art'])
  }
}
