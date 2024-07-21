import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found25Component } from './found25.component';

describe('Found25Component', () => {
  let component: Found25Component;
  let fixture: ComponentFixture<Found25Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found25Component]
    });
    fixture = TestBed.createComponent(Found25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
