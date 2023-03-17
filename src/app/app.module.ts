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
import { PaymentComponent } from './payment/payment.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';


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
    PaymentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
