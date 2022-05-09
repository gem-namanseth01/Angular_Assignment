import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LogInComponent } from './reactive-driven-form/log-in/log-in.component';
import { SignUpComponent } from './reactive-driven-form/sign-up/sign-up.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';


const routes: Routes = [
  {path:"template-driven",component:TemplateDrivenFormComponent},
  {path:"",component:HomepageComponent},
  {path:"reactive-driven",component:SignUpComponent},
  {path:"login",component:LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
