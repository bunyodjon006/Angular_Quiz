import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found43Component } from './found43.component';

describe('Found43Component', () => {
  let component: Found43Component;
  let fixture: ComponentFixture<Found43Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found43Component]
    });
    fixture = TestBed.createComponent(Found43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
