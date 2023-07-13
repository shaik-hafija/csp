import { Component, OnInit, OnDestroy } from '@angular/core';
import { FlowerservicwService } from '../flowerservicw.service';
import { Subscription } from 'rxjs';
// import { error } from 'console';
import { Flower } from '../flower';


@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.css']
})
export class FlowersComponent implements OnInit, OnDestroy {

  constructor(private flowerservice: FlowerservicwService, private Subscription: Subscription) { }
  ptype: String = 'flower';
  flower: any[any] = [];
  subscription: Subscription

  Flowers() {
    this.subscription = this.flowerservice.Getflower(this.ptype).subscribe(
      {
        next: (Data) => {
          console.log(Data);
          this.flower = Data;
        },
        error: (Err) => {
          console.log(Err);
        }
      }
    )
  }

  ngOnInit() {


  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();



  }


}
