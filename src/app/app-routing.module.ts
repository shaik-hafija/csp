import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImpactComponent } from './impact/impact.component';
import { TimelineComponent } from './timeline/timeline.component';
import { FlowersComponent } from './flowers/flowers.component';
import { SellComponent } from './sell/sell.component';

import { OrderComponent } from './order/order.component';

import { MainComponent } from './main/main.component';
import { FlowerssComponent } from './flowerss/flowerss.component';
import { FormComponent } from './form/form.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'impact',
    component:ImpactComponent
  },
  {
    path:'timeline',
    component:TimelineComponent
  },
 
  {
    path:'sell',
    component:SellComponent
  },
  {
    path:'order',
    component:OrderComponent
  },
  {
    path:'main',
    component:MainComponent
  },
  {
    path:'flowerss',
    component:FlowerssComponent
  },
  {
    path:'form',
    component:FormComponent
  },
  {
    path:'about',
    component:AboutComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
export const myRoutings=[

 OrderComponent,
 FlowersComponent,
  HomeComponent,
  TimelineComponent,
  ImpactComponent,
  FormComponent,
  AboutComponent
 
  ]
