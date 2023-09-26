import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProcessStatus } from 'src/shared/enum/process-status.enum';

@Component({
  selector: 'app-add-process-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './add-process-dialog.component.html',
  styleUrls: ['./add-process-dialog.component.scss'],
})
export class AddProcessDialogComponent {
  processForm = this.fb.group({
    leftEar: ['', Validators.required],
    rightEar: ['', Validators.required],
    questionnaire: ['', Validators.required],
    device: [{ value: '', disabled: true }, Validators.required],
    isFinished: [false],
  });

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddProcessDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  addProcess(): void {
    if (this.processForm.valid) {
      this.dialogRef.close(this.processForm.getRawValue());
    }
  }
}
