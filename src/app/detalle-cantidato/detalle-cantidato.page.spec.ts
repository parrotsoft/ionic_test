import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCantidatoPage } from './detalle-cantidato.page';

describe('DetalleCantidatoPage', () => {
  let component: DetalleCantidatoPage;
  let fixture: ComponentFixture<DetalleCantidatoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleCantidatoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCantidatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
