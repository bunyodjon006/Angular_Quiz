import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found41Component } from './found41.component';

describe('Found41Component', () => {
  let component: Found41Component;
  let fixture: ComponentFixture<Found41Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found41Component]
    });
    fixture = TestBed.createComponent(Found41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
