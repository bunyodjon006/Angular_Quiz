import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found44Component } from './found44.component';

describe('Found44Component', () => {
  let component: Found44Component;
  let fixture: ComponentFixture<Found44Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found44Component]
    });
    fixture = TestBed.createComponent(Found44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
