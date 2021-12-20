import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingComponent } from './loading/loading.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';
import { FormsModule } from '@angular/forms';

const materialComponents = [
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatStepperModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatDialogModule,
];
@NgModule({
  declarations: [InputComponent, LoadingComponent, CustomDialogComponent],
  imports: [
    CommonModule,
    materialComponents,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule,
    FormsModule,
  ],
  exports: [
    materialComponents,
    InputComponent,
    LoadingComponent,
    NgxSkeletonLoaderModule,
    MatExpansionModule,
    CustomDialogComponent,
  ],
})
export class SharedModule {}
