import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found29Component } from './found29.component';

describe('Found29Component', () => {
  let component: Found29Component;
  let fixture: ComponentFixture<Found29Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found29Component]
    });
    fixture = TestBed.createComponent(Found29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
