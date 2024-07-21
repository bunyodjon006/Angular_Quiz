import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found26Component } from './found26.component';

describe('Found26Component', () => {
  let component: Found26Component;
  let fixture: ComponentFixture<Found26Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found26Component]
    });
    fixture = TestBed.createComponent(Found26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
