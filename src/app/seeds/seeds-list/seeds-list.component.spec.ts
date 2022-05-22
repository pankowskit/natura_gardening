import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedsListComponent } from './seeds-list.component';

describe('SeedsListComponent', () => {
  let component: SeedsListComponent;
  let fixture: ComponentFixture<SeedsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeedsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeedsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
