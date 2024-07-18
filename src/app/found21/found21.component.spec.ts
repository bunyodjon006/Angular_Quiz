import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found21Component } from './found21.component';

describe('Found21Component', () => {
  let component: Found21Component;
  let fixture: ComponentFixture<Found21Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found21Component]
    });
    fixture = TestBed.createComponent(Found21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
