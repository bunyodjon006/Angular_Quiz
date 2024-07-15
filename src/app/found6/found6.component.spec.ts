import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found6Component } from './found6.component';

describe('Found6Component', () => {
  let component: Found6Component;
  let fixture: ComponentFixture<Found6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found6Component]
    });
    fixture = TestBed.createComponent(Found6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
