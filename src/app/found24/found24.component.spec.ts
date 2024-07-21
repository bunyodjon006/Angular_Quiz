import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found24Component } from './found24.component';

describe('Found24Component', () => {
  let component: Found24Component;
  let fixture: ComponentFixture<Found24Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found24Component]
    });
    fixture = TestBed.createComponent(Found24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
