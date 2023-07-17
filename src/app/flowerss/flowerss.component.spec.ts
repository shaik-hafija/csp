import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerssComponent } from './flowerss.component';

describe('FlowerssComponent', () => {
  let component: FlowerssComponent;
  let fixture: ComponentFixture<FlowerssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowerssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
