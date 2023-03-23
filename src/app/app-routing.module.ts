import { HomeComponent } from './home/home.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contactme', component: ContactmeComponent  },
  { path: 'aboutme', component: AboutmeComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
