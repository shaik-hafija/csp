import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerrComponent } from './flowerr.component';

describe('FlowerrComponent', () => {
  let component: FlowerrComponent;
  let fixture: ComponentFixture<FlowerrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowerrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
