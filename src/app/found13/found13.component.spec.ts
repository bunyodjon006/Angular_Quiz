import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found13Component } from './found13.component';

describe('Found13Component', () => {
  let component: Found13Component;
  let fixture: ComponentFixture<Found13Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found13Component]
    });
    fixture = TestBed.createComponent(Found13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
