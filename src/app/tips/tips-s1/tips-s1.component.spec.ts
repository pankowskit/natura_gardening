import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsS1Component } from './tips-s1.component';

describe('TipsS1Component', () => {
  let component: TipsS1Component;
  let fixture: ComponentFixture<TipsS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipsS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
