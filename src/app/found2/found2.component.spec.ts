import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found2Component } from './found2.component';

describe('Found2Component', () => {
  let component: Found2Component;
  let fixture: ComponentFixture<Found2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found2Component]
    });
    fixture = TestBed.createComponent(Found2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
