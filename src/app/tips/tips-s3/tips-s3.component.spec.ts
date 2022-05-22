import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsS3Component } from './tips-s3.component';

describe('TipsS3Component', () => {
  let component: TipsS3Component;
  let fixture: ComponentFixture<TipsS3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipsS3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
