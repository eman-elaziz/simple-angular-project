import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { OurExpertiseComponent } from './our-expertise/our-expertise.component';
import { ContactComponent } from './contact/contact.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import{ReactiveFormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OurTeamComponent,
    OurExpertiseComponent,
    ContactComponent,
    JoinUsComponent,
    NavbarComponent,
    NotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
