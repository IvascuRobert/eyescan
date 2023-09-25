import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  NonNullableFormBuilder,
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
import { DeviceQuality } from 'src/shared/enum/device-quality.enum';
import { TypeOfClient } from 'src/shared/enum/type-of-client.enum';
import { TypeOfReservation } from 'src/shared/enum/type-of-reservation.enum';
import { Contact } from 'src/shared/interface/contact';
import { ControlsOf } from 'src/shared/utils/utils';

@Component({
  selector: 'app-add-contact-dialog',
  templateUrl: './add-contact-dialog.component.html',
  styleUrls: ['./add-contact-dialog.component.scss'],
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
})
export class AddContactDialogComponent {
  addContactForm = this.fb.group({
    id: [Math.floor(1000 + Math.random() * 9000)],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    taxCode: [''],
    address: [''],
    phoneNumber: [''],
    birthDate: [new Date()],

    lastAppointmentDate: [new Date()],
    lastBoughtDeviceDate: [new Date()],

    typeOfReservation: [TypeOfReservation.UNKNOWN], // screening, cosign, adaptation, definition, control
    typeOfClient: [TypeOfClient.UNKNOWN], // client, potentialClient, competitorClient, premature
    favoriteShop: [''], // here will be assign the shop where the client bought the device

    deviceQuality: [DeviceQuality.UNKNOWN], // low, medium, highEnd, premium
    deviceSerialNumber: [''], // this comes from audio device when you assign it

    guarantee: [new Date()], // two years of guarantee something like this
    privacy: [false], // if the agree the privacy
  });

  constructor(
    private fb: NonNullableFormBuilder,
    public dialogRef: MatDialogRef<AddContactDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Contact
  ) {}

  addContact(): void {
    if (this.addContactForm.valid) {
      this.dialogRef.close(this.addContactForm.getRawValue());
    }
  }
}
