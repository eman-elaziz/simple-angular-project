import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { OurExpertiseComponent } from './our-expertise/our-expertise.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"ourTeam",component:OurTeamComponent},
  {path:"ourExpertise",component:OurExpertiseComponent},
  {path:"joinUs",component:JoinUsComponent},
  {path:"contact",component:ContactComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
