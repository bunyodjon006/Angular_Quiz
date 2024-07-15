import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found5Component } from './found5.component';

describe('Found5Component', () => {
  let component: Found5Component;
  let fixture: ComponentFixture<Found5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found5Component]
    });
    fixture = TestBed.createComponent(Found5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
