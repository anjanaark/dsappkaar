import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DhasboardtryComponent } from './dhasboardtry/dhasboardtry.component';


const routes: Routes = [{
  path:'',component:LoginComponent},
  {  path:'home',component:HomeComponent
},{path:'dashboard',component:DashboardComponent},
{path:'dashboardtry',component:DhasboardtryComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
