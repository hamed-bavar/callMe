import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepImageComponent } from './step-image.component';

describe('StepImageComponent', () => {
  let component: StepImageComponent;
  let fixture: ComponentFixture<StepImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
