import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators
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
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

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
    MatSelectModule,
  ],
  templateUrl: './add-process-dialog.component.html',
  styleUrls: ['./add-process-dialog.component.scss'],
})
export class AddProcessDialogComponent {
  processForm = this.fb.group({
    leftEar: [0, Validators.required],
    rightEar: [0, Validators.required],
    questionnaire: [0, Validators.required],
    deviceLeftEar: ['', Validators.required],
    deviceRightEar: ['', Validators.required],
  });

  devices = [
    { value: 'device-0', viewValue: 'No device' },
    { value: 'device-1', viewValue: 'Has device in last 3 years' },
    { value: 'device-2', viewValue: 'Has device more than 3 years' },
  ];

  constructor(
    private fb: NonNullableFormBuilder,
    public dialogRef: MatDialogRef<AddProcessDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  addProcess(): void {
    if (this.processForm.valid) {
      this.dialogRef.close(this.processForm.getRawValue());
    }
  }
}
