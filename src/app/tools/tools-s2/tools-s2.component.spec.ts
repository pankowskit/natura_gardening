import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsS2Component } from './tools-s2.component';

describe('ToolsS2Component', () => {
  let component: ToolsS2Component;
  let fixture: ComponentFixture<ToolsS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsS2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
