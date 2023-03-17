import { Component } from '@angular/core';
import { Firestore,collection } from '@angular/fire/firestore';
import { GalleryService } from 'src/app/gallery.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  message:string='';
 

constructor(public gallery:GalleryService,private fire:Firestore)
{}

submit()
{
  const data = {
    message:this.message
  }
  console.log(data);
  const docRef = collection(this.fire,"feedbackdata")
  this.gallery.insertData(docRef,data)
  this.message='';
}
}