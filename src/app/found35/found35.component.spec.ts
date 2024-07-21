import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found35Component } from './found35.component';

describe('Found35Component', () => {
  let component: Found35Component;
  let fixture: ComponentFixture<Found35Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found35Component]
    });
    fixture = TestBed.createComponent(Found35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
