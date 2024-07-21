import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found22Component } from './found22.component';

describe('Found22Component', () => {
  let component: Found22Component;
  let fixture: ComponentFixture<Found22Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found22Component]
    });
    fixture = TestBed.createComponent(Found22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
