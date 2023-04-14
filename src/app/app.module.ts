import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CustumersComponent } from './custumers/custumers.component';
import { NewsComponent } from './news/news.component';
import { ServicesComponent } from './services/services.component';
import { InnovationComponent } from './innovation/innovation.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    AboutUsComponent,
    CustumersComponent,
    NewsComponent,
    ServicesComponent,
    InnovationComponent,
    ContactUsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
