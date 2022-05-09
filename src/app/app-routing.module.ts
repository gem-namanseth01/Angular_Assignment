import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';


const routes: Routes = [
  {path:"template-driven",component:TemplateDrivenFormComponent},
  {path:"",component:HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
