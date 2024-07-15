import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found9Component } from './found9.component';

describe('Found9Component', () => {
  let component: Found9Component;
  let fixture: ComponentFixture<Found9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found9Component]
    });
    fixture = TestBed.createComponent(Found9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
