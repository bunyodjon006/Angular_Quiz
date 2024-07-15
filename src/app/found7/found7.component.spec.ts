import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found7Component } from './found7.component';

describe('Found7Component', () => {
  let component: Found7Component;
  let fixture: ComponentFixture<Found7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found7Component]
    });
    fixture = TestBed.createComponent(Found7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
