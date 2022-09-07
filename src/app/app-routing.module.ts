import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo1Component } from './demos/demo1/demo1.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'demo1', component: Demo1Component },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
