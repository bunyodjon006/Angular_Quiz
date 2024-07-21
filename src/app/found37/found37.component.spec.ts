import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found37Component } from './found37.component';

describe('Found37Component', () => {
  let component: Found37Component;
  let fixture: ComponentFixture<Found37Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found37Component]
    });
    fixture = TestBed.createComponent(Found37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
