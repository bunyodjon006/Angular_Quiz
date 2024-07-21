import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found33Component } from './found33.component';

describe('Found33Component', () => {
  let component: Found33Component;
  let fixture: ComponentFixture<Found33Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found33Component]
    });
    fixture = TestBed.createComponent(Found33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
