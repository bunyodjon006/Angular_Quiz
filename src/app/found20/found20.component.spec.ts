import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found20Component } from './found20.component';

describe('Found20Component', () => {
  let component: Found20Component;
  let fixture: ComponentFixture<Found20Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found20Component]
    });
    fixture = TestBed.createComponent(Found20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
