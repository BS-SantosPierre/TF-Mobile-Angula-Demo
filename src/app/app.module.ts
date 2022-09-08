import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { Demo1Component } from './demos/demo1/demo1.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Demo2Component } from './demos/demo2/demo2.component';
import { FormsModule } from '@angular/forms';
import { Exo1Component } from './exos/exo1/exo1.component';
import { Demo3Component } from './demos/demo3/demo3.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
    Demo1Component,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    Demo2Component,
    Exo1Component,
    Demo3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
