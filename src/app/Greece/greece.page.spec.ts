import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreecePage } from './greece.page';

describe('GreecePage', () => {
  let component: GreecePage;
  let fixture: ComponentFixture<GreecePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreecePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreecePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
