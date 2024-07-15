import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found12Component } from './found12.component';

describe('Found12Component', () => {
  let component: Found12Component;
  let fixture: ComponentFixture<Found12Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found12Component]
    });
    fixture = TestBed.createComponent(Found12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
