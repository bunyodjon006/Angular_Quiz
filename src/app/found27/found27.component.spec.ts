import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found27Component } from './found27.component';

describe('Found27Component', () => {
  let component: Found27Component;
  let fixture: ComponentFixture<Found27Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found27Component]
    });
    fixture = TestBed.createComponent(Found27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
