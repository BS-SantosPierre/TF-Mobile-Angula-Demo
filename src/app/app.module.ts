import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloAngularComponent } from './hello-angular/hello-angular.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { Demo1Component } from './demos/demo1/demo1.component';
import { HomeComponent } from './home/home.component';
import { Demo2Component } from './demo/demo2/demo2.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloAngularComponent,
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
    Demo1Component,
    HomeComponent,
    Demo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
