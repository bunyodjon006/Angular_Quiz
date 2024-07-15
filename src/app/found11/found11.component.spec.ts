import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found11Component } from './found11.component';

describe('Found11Component', () => {
  let component: Found11Component;
  let fixture: ComponentFixture<Found11Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found11Component]
    });
    fixture = TestBed.createComponent(Found11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
