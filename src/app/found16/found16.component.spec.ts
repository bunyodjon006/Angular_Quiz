import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found16Component } from './found16.component';

describe('Found16Component', () => {
  let component: Found16Component;
  let fixture: ComponentFixture<Found16Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found16Component]
    });
    fixture = TestBed.createComponent(Found16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
