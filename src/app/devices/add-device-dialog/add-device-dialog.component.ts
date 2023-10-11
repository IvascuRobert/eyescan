import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
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
  selector: 'app-add-device-dialog',
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
  templateUrl: './add-device-dialog.component.html',
  styleUrls: ['./add-device-dialog.component.scss'],
})
export class AddDeviceDialogComponent {
  addDevicesForm = this.fb.group({
    name: [''],
    brand: [''],
    serialNumber: [''],
    type: [''],
    battery: [''],
    qualityLevel: [''],
    color: [''],
    aslGroup: [''],
    number: [''],
    location: [''],
    price: [''],
    createdDate: [new Date()],
    client: [''],
    autocomplete: [''],
  });

  brands = [
    { value: 'brand-0', viewValue: 'Brand 1' },
    { value: 'brand-1', viewValue: 'Brand 2' },
    { value: 'brand-2', viewValue: 'Brand 3' },
  ];

  types = [
    { value: 'type-0', viewValue: 'Retro' },
    { value: 'type-1', viewValue: 'Endo' },
  ];

  batteries = [
    { value: 'battery-0', viewValue: 'R' },
    { value: 'battery-1', viewValue: '312' },
    { value: 'battery-2', viewValue: '10' },
    { value: 'battery-3', viewValue: '13' },
    { value: 'battery-675', viewValue: '675' },
  ];

  qualityLevels = [
    { value: 'quality-0', viewValue: '1' },
    { value: 'quality-1', viewValue: '2' },
    { value: 'quality-2', viewValue: '3' },
    { value: 'quality-3', viewValue: '4' },
    { value: 'quality-4', viewValue: '5' },
  ];

  aslGroups = [
    { value: 'aslGroup-0', viewValue: '1' },
    { value: 'aslGroup-1', viewValue: '2' },
  ];

  locations = [
    { value: 'location-0', viewValue: 'Milano' },
    { value: 'location-1', viewValue: 'Baicoi' },
  ];

  devices = [{ value: 'device-0', viewValue: 'Device 1' }];

  constructor(
    private fb: NonNullableFormBuilder,
    public dialogRef: MatDialogRef<AddDeviceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  addDevice(): void {
    if (this.addDevicesForm.valid) {
      this.dialogRef.close(this.addDevicesForm.getRawValue());
    }
  }
}
