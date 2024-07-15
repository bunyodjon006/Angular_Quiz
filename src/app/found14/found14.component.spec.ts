import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found14Component } from './found14.component';

describe('Found14Component', () => {
  let component: Found14Component;
  let fixture: ComponentFixture<Found14Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found14Component]
    });
    fixture = TestBed.createComponent(Found14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
