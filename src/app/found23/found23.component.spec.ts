import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found23Component } from './found23.component';

describe('Found23Component', () => {
  let component: Found23Component;
  let fixture: ComponentFixture<Found23Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found23Component]
    });
    fixture = TestBed.createComponent(Found23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
