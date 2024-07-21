import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found42Component } from './found42.component';

describe('Found42Component', () => {
  let component: Found42Component;
  let fixture: ComponentFixture<Found42Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found42Component]
    });
    fixture = TestBed.createComponent(Found42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
