/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MutasiRekeningComponent } from './mutasi-rekening.component';

describe('MutasiRekeningComponent', () => {
  let component: MutasiRekeningComponent;
  let fixture: ComponentFixture<MutasiRekeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutasiRekeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutasiRekeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
