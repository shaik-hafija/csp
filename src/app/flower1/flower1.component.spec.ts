import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Flower1Component } from './flower1.component';

describe('Flower1Component', () => {
  let component: Flower1Component;
  let fixture: ComponentFixture<Flower1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Flower1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Flower1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
