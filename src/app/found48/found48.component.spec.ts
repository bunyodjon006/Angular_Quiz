import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found48Component } from './found48.component';

describe('Found48Component', () => {
  let component: Found48Component;
  let fixture: ComponentFixture<Found48Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found48Component]
    });
    fixture = TestBed.createComponent(Found48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
