import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedsSidebarComponent } from './seeds-sidebar.component';

describe('SeedsSidebarComponent', () => {
  let component: SeedsSidebarComponent;
  let fixture: ComponentFixture<SeedsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeedsSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeedsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
