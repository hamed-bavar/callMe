import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostInputsComponent } from './create-post-inputs.component';

describe('CreatePostInputsComponent', () => {
  let component: CreatePostInputsComponent;
  let fixture: ComponentFixture<CreatePostInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePostInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePostInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
