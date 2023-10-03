import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-end-process-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './end-process-dialog.component.html',
  styleUrls: ['./end-process-dialog.component.scss'],
})
export class EndProcessDialogComponent {
  endProcessForm = this.fb.group({
    reason: ['', Validators.required],
    note: ['', Validators.required],
  });

  reasons = [
    { value: 'reason-0', viewValue: 'Not ready' },
    { value: 'reason-1', viewValue: 'Esthetics' },
    { value: 'reason-2', viewValue: 'Expensive' },
  ];

  constructor(
    private fb: NonNullableFormBuilder,
    public dialogRef: MatDialogRef<EndProcessDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  endProcess(): void {
    if (this.endProcessForm.valid) {
      this.dialogRef.close(this.endProcessForm.getRawValue());
    }
  }
}
