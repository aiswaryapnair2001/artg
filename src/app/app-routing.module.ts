import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigitComponent } from './digit/digit.component';
import { ArtComponent } from './pages/art/art.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SingleComponent } from './pages/single/single.component';
import { SingledigComponent } from './pages/singledig/singledig.component';
import { SinglespComponent } from './pages/singlesp/singlesp.component';
import { SingleweComponent } from './pages/singlewe/singlewe.component';
import { SinglewtComponent } from './pages/singlewt/singlewt.component';
import { TradiComponent } from './pages/tradi/tradi.component';
import { PaymentComponent } from './payment/payment.component';
import { SprayComponent } from './spray/spray.component';
import { WaterComponent } from './water/water.component';
import { WesternComponent } from './western/western.component';

const routes: Routes = [
  {
  path:'', component:HomeComponent
  },
  {

  path:'home',component:HomeComponent
},
{
  path:'signup',component:SignupComponent
},
{
  path:'contact',component:ContactComponent
},
{
  path:'art',component:ArtComponent
},
{
  path:'feedback',component:FeedbackComponent
},
{
  path:'tradi',component:TradiComponent
},
{
  path:'digit',component:DigitComponent
},
{
  path:'spray',component:SprayComponent
},
{
  path:'water',component:WaterComponent
},
{
  path:'western',component:WesternComponent
},
{
  path:'single',component:SingleComponent
},
{
  path:'singledig',component:SingledigComponent
},
{
  path:'singlesp',component:SinglespComponent
},
{
  path:'singlewt',component:SinglewtComponent
},
{
  path:'singlewe',component:SingleweComponent
},
{
  path:'payment',component:PaymentComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
