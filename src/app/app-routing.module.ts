import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImpactComponent } from './impact/impact.component';
import { TimelineComponent } from './timeline/timeline.component';
import { FlowersComponent } from './flowers/flowers.component';
import { SellComponent } from './sell/sell.component';
import { Flower1Component } from './flower1/flower1.component';
import { OrderComponent } from './order/order.component';

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
    path:'flower1',
    component:Flower1Component
  },
  {
    path:'sell',
    component:SellComponent
  },
  {
    path:'order',
    component:OrderComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
export const myRoutings=[
 Flower1Component,
 OrderComponent,
 FlowersComponent,
  HomeComponent,
  TimelineComponent,
  ImpactComponent,
 
  ]
