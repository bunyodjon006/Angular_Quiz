import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found40Component } from './found40.component';

describe('Found40Component', () => {
  let component: Found40Component;
  let fixture: ComponentFixture<Found40Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found40Component]
    });
    fixture = TestBed.createComponent(Found40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
