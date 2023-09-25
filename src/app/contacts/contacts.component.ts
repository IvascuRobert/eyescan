import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AddContactDialogComponent } from './add-contact-dialog/add-contact-dialog.component';
import { RouterModule } from '@angular/router';
import { Contact } from 'src/shared/interface/contact';
import { TypeOfClient } from 'src/shared/enum/type-of-client.enum';
import { TypeOfReservation } from 'src/shared/enum/type-of-reservation.enum';
import { DeviceQuality } from 'src/shared/enum/device-quality.enum';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    NgIf,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatRippleModule,
  ],
})
export class ContactsComponent {
  searchClientForm = this.fb.group({
    id: [],
    firstName: [''],
    lastName: [''],
    email: [''],
    taxCode: [''],
    address: [''],
    phoneNumber: [''],
    birthDate: [''],

    lastAppointmentDate: [new Date()],
    lastBoughtDeviceDate: [new Date()],

    typeOfReservation: [], // screening, cosign, adaptation, definition, control
    typeOfClient: [], // client, potentialClient, competitorClient, premature
    favoriteShop: [''], // here will be assign the shop where the client bought the device

    deviceQuality: [''], // low, medium, highEnd, premium
    deviceSerialNumber: [''], // this comes from audio device when you assign it

    guarantee: [new Date()], // two years of guarantee something like this
    privacy: [false], // if the agree the privacy
    searchType: [false], // simple, advanced
  });

  clients = new MatTableDataSource<Contact>([
    {
      id: 1,
      firstName: 'Ivascu',
      lastName: 'Robert',
      email: 'robi_ivas@yahoo.com',
      taxCode: '123',
      address: 'Soseaua Pantelimon nr 266, bloc E, ap 23',
      phoneNumber: '0758662023',
      birthDate: new Date('1994-12-23T22:00:00.000Z'),
      lastAppointmentDate: new Date('2023-09-25T20:49:14.963Z'),
      lastBoughtDeviceDate: new Date('2023-09-25T20:49:14.963Z'),
      typeOfReservation: TypeOfReservation.UNKNOWN,
      typeOfClient: TypeOfClient.UNKNOWN,
      favoriteShop: '',
      deviceQuality: DeviceQuality.UNKNOWN,
      deviceSerialNumber: '',
      guarantee: new Date(),
      privacy: false,
    },
    {
      id: 2,
      firstName: 'Ivascu',
      lastName: 'Robert',
      email: 'robi_ivas@yahoo.com',
      taxCode: '123',
      address: 'Soseaua Pantelimon nr 266, bloc E, ap 23',
      phoneNumber: '0758662023',
      birthDate: new Date('1994-12-23T22:00:00.000Z'),
      lastAppointmentDate: new Date('2023-09-25T20:49:14.963Z'),
      lastBoughtDeviceDate: new Date('2023-09-25T20:49:14.963Z'),
      typeOfReservation: TypeOfReservation.UNKNOWN,
      typeOfClient: TypeOfClient.UNKNOWN,
      favoriteShop: '',
      deviceQuality: DeviceQuality.UNKNOWN,
      deviceSerialNumber: '',
      guarantee: new Date(),
      privacy: false,
    },
  ]);

  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'taxCode',
    'address',
    'phoneNumber',
    'birthDate',
    'lastAppointmentDate',
    'lastBoughtDeviceDate',
    'typeOfReservation',
    'typeOfClient',
    'favoriteShop',
    'deviceQuality',
    'deviceSerialNumber',
  ];

  get searchType() {
    return this.searchClientForm.get('searchType') as FormControl<boolean>;
  }

  constructor(public dialog: MatDialog, private fb: FormBuilder) {}

  addContact() {
    const dialogRef = this.dialog.open(AddContactDialogComponent);

    dialogRef.afterClosed().subscribe((contact: Contact) => {
      if (contact) {
        this.addContactInTable(contact);
      }
    });
  }

  searchClients(): void {
    console.log(this.searchClientForm.getRawValue());
  }

  private addContactInTable(client: any) {
    this.clients.data = [...this.clients.data, client];
  }
}
