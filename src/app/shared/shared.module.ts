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

const materialComponents = [
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
];
@NgModule({
  declarations: [InputComponent, LoadingComponent],
  imports: [CommonModule, materialComponents, ReactiveFormsModule],
  exports: [materialComponents, InputComponent, LoadingComponent],
})
export class SharedModule {}
