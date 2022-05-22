import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsS1Component } from './tools-s1.component';

describe('ToolsS1Component', () => {
  let component: ToolsS1Component;
  let fixture: ComponentFixture<ToolsS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
