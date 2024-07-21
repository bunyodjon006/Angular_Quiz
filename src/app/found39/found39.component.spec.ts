import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found39Component } from './found39.component';

describe('Found39Component', () => {
  let component: Found39Component;
  let fixture: ComponentFixture<Found39Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found39Component]
    });
    fixture = TestBed.createComponent(Found39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
