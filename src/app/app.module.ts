import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RightComponent } from './right/right.component';
import { MiddleComponent } from './middle/middle.component';
import { LeftComponent } from './left/left.component';
import { BindingComponent } from './binding/binding.component';
import { DirectComponent } from './direct/direct.component';
import { RoutingComponent } from './routing/routing.component';
import { HomeComponent } from './home/home.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { InputComponent } from './input/input.component';
import { MathService } from './services/math.service';
import { SqrtPipe } from './sqrt.pipe';
import { ShortenPipe } from './shorten.pipe';
import { ObservableComponent } from './observable/observable.component';
@NgModule({
  declarations: [
    AppComponent,
    RightComponent,
    MiddleComponent,
    LeftComponent,
    BindingComponent,
    DirectComponent,
    RoutingComponent,
    HomeComponent,
    ContactmeComponent,
    AboutmeComponent,
    InputComponent,
    SqrtPipe,
    ShortenPipe,
    ObservableComponent ,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
],
  providers: [MathService],
  bootstrap: [AppComponent]
})
export class AppModule { }
