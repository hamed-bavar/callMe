import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostIndividualInputsComponent } from './create-post-individual-inputs.component';

describe('CreatePostIndividualInputsComponent', () => {
  let component: CreatePostIndividualInputsComponent;
  let fixture: ComponentFixture<CreatePostIndividualInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePostIndividualInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePostIndividualInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
