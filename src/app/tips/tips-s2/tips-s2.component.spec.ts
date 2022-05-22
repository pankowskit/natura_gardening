import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsS2Component } from './tips-s2.component';

describe('TipsS2Component', () => {
  let component: TipsS2Component;
  let fixture: ComponentFixture<TipsS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipsS2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
