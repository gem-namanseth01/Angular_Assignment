import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveDrivenFormComponent } from './reactive-driven-form/reactive-driven-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TemplateDrivenFormComponent,
    ReactiveDrivenFormComponent,
    NavBarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
