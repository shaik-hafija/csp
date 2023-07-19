import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImpactComponent } from './impact/impact.component';
import { TimelineComponent } from './timeline/timeline.component';
import { SellComponent } from './sell/sell.component';

import { OrderComponent } from './order/order.component';

import { MainComponent } from './main/main.component';
import { FlowerssComponent } from './flowerss/flowerss.component';
import { FormComponent } from './form/form.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SummerComponent } from './summer/summer.component';
import { WinterComponent } from './winter/winter.component';
import { AutumnComponent } from './autumn/autumn.component';
import { FlowerrComponent } from './flowerr/flowerr.component';

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
    path:'flowerr',
    component:FlowerrComponent
  },
  {
    path:'form',
    component:FormComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contactus',
    component:ContactusComponent
  },
  {
    path:'summer',
    component:SummerComponent
  },
  {
    path:'winter',
    component:WinterComponent
  },
  {
    path:'autumn',
    component:AutumnComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
export const myRoutings=[

 OrderComponent,
  HomeComponent,
  TimelineComponent,
  ImpactComponent,
  FormComponent,
  AboutComponent,
  FlowerrComponent
 
  ]
