import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found4Component } from './found4.component';

describe('Found4Component', () => {
  let component: Found4Component;
  let fixture: ComponentFixture<Found4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found4Component]
    });
    fixture = TestBed.createComponent(Found4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
