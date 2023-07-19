import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ImpactComponent } from './impact/impact.component';
import { TimelineComponent } from './timeline/timeline.component';
import { SellComponent } from './sell/sell.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImpactComponent,
    TimelineComponent,
    SellComponent,
  
    OrderComponent,
 
    MainComponent,
 
    FlowerssComponent,
 
    FormComponent,
 
    AboutComponent,
 
    ContactusComponent,
 
    SummerComponent,
 
    WinterComponent,
 
    AutumnComponent,
 
    FlowerrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
