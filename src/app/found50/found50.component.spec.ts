import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found50Component } from './found50.component';

describe('Found50Component', () => {
  let component: Found50Component;
  let fixture: ComponentFixture<Found50Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found50Component]
    });
    fixture = TestBed.createComponent(Found50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
