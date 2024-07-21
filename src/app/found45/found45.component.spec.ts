import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found45Component } from './found45.component';

describe('Found45Component', () => {
  let component: Found45Component;
  let fixture: ComponentFixture<Found45Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found45Component]
    });
    fixture = TestBed.createComponent(Found45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
