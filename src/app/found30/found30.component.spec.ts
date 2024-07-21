import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found30Component } from './found30.component';

describe('Found30Component', () => {
  let component: Found30Component;
  let fixture: ComponentFixture<Found30Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found30Component]
    });
    fixture = TestBed.createComponent(Found30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
