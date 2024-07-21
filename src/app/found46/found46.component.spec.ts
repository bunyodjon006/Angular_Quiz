import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found46Component } from './found46.component';

describe('Found46Component', () => {
  let component: Found46Component;
  let fixture: ComponentFixture<Found46Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found46Component]
    });
    fixture = TestBed.createComponent(Found46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
