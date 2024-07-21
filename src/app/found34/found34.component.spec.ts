import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found34Component } from './found34.component';

describe('Found34Component', () => {
  let component: Found34Component;
  let fixture: ComponentFixture<Found34Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found34Component]
    });
    fixture = TestBed.createComponent(Found34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
