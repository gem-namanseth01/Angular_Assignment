import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignUpComponent } from './reactive-driven-form/sign-up/sign-up.component';
import { LogInComponent } from './reactive-driven-form/log-in/log-in.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TemplateDrivenFormComponent,
    
    NavBarComponent,
         SignUpComponent,
         LogInComponent,
        
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
