import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedsS1Component } from './seeds-s1.component';

describe('SeedsS1Component', () => {
  let component: SeedsS1Component;
  let fixture: ComponentFixture<SeedsS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeedsS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeedsS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
