import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found15Component } from './found15.component';

describe('Found15Component', () => {
  let component: Found15Component;
  let fixture: ComponentFixture<Found15Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found15Component]
    });
    fixture = TestBed.createComponent(Found15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
