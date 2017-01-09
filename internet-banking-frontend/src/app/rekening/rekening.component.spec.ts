/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RekeningComponent } from './rekening.component';

describe('RekeningComponent', () => {
  let component: RekeningComponent;
  let fixture: ComponentFixture<RekeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RekeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
