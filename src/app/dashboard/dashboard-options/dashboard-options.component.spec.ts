import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOptionsComponent } from './dashboard-options.component';

describe('DashboardOptionsComponent', () => {
  let component: DashboardOptionsComponent;
  let fixture: ComponentFixture<DashboardOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
