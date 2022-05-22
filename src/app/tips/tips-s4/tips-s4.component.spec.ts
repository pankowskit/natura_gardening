import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsS4Component } from './tips-s4.component';

describe('TipsS4Component', () => {
  let component: TipsS4Component;
  let fixture: ComponentFixture<TipsS4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipsS4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsS4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
