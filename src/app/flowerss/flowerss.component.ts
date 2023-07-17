import { Component,OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {Flower} from '../flower';
import { FlowerservicwService} from '../flowerservicw.service';
@Component({
  selector: 'app-flowerss',
  templateUrl: './flowerss.component.html',
  styleUrls: ['./flowerss.component.css']
})
export class FlowerssComponent implements OnInit{
  ngOnInit(): void {}
  constructor(private service:FlowerservicwService){}
  Subscription:Subscription=new Subscription();
  a:any[]=[];
  show=true;
  m=false;
  type:string='flower';
 
  flower:Flower={
    p_id:'',
   p_image:'',
   p_name:'',
    p_type:'',
    p_cost:0
  }
  //url="https://www.thespruce.com/thmb/0QHDmutjh9OcQ-V4sHuUjRhPWo0=/6720x0/filters:no_upscale():max_bytes(150000):strip_icc()/tiny-flowers-1315816-02-ffd9607c255d482cb14838988fb5093f.jpg";
  Read(){
    this.Subscription=this.service.Read2(this.type).subscribe(
      (Data:any)=>{
        if(Data){
          console.log(Data);
          this.a = Data;
          this.show=true;
        }
        else{
          console.log("error");
          
        }
    }
    )
  }
  OnDestroy(): void {
    this.Subscription.unsubscribe();
  }
  more()
  {
this.m=true;
  }
}
