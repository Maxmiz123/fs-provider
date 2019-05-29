import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlabamaPage } from './alabama.page';

describe('AlabamaPage', () => {
  let component: AlabamaPage;
  let fixture: ComponentFixture<AlabamaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlabamaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlabamaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
