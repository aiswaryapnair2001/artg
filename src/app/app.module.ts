import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { FooterComponent } from './utils/footer/footer.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { ArtComponent } from './pages/art/art.component';
import { TradiComponent } from './pages/tradi/tradi.component';
import { DigitComponent } from './digit/digit.component';
import { SprayComponent } from './spray/spray.component';
import { WaterComponent } from './water/water.component';
import { WesternComponent } from './western/western.component';
import { SingleComponent } from './pages/single/single.component';
import { SingledigComponent } from './pages/singledig/singledig.component';
import { SinglespComponent } from './pages/singlesp/singlesp.component';
import { SinglewtComponent } from './pages/singlewt/singlewt.component';
import { SingleweComponent } from './pages/singlewe/singlewe.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    ContactComponent,
    SignupComponent,
    NavbarComponent,
    FooterComponent,
    FeedbackComponent,
    ArtComponent,
    TradiComponent,
    DigitComponent,
    SprayComponent,
    WaterComponent,
    WesternComponent,
    SingleComponent,
    SingledigComponent,
    SinglespComponent,
    SinglewtComponent,
    SingleweComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
