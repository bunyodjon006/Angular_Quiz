import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found31Component } from './found31.component';

describe('Found31Component', () => {
  let component: Found31Component;
  let fixture: ComponentFixture<Found31Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found31Component]
    });
    fixture = TestBed.createComponent(Found31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
