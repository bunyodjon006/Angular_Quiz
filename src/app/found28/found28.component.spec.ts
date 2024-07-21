import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found28Component } from './found28.component';

describe('Found28Component', () => {
  let component: Found28Component;
  let fixture: ComponentFixture<Found28Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found28Component]
    });
    fixture = TestBed.createComponent(Found28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
