import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found19Component } from './found19.component';

describe('Found19Component', () => {
  let component: Found19Component;
  let fixture: ComponentFixture<Found19Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found19Component]
    });
    fixture = TestBed.createComponent(Found19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
