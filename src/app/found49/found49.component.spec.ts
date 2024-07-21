import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found49Component } from './found49.component';

describe('Found49Component', () => {
  let component: Found49Component;
  let fixture: ComponentFixture<Found49Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found49Component]
    });
    fixture = TestBed.createComponent(Found49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
