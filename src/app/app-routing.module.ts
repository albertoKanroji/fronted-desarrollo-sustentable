import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CustumersComponent } from './custumers/custumers.component';
import { InnovationComponent } from './innovation/innovation.component';
import { NewsComponent } from './news/news.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';

const routes: Routes = [

{
  path:'home',
  component:HomeComponent
},
{
  path:'about-us',
  component:AboutUsComponent
},
{
  path:'customers',
  component:CustumersComponent
},
{
  path:'innovation',
  component:InnovationComponent
},
{
  path:'news',
  component:NewsComponent
},
{
  path:'services',
  component:ServicesComponent
},
{
  path:'contact-us',
  component:ContactUsComponent
},
{ path: 'news/:id', component: NewsDetailComponent } // Ruta con parámetro ':id'


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
