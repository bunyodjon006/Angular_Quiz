import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found38Component } from './found38.component';

describe('Found38Component', () => {
  let component: Found38Component;
  let fixture: ComponentFixture<Found38Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found38Component]
    });
    fixture = TestBed.createComponent(Found38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
