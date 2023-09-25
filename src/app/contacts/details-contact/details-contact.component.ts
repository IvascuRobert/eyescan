import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/shared/interface/contact';
import { TypeOfReservation } from 'src/shared/enum/type-of-reservation.enum';
import { TypeOfClient } from 'src/shared/enum/type-of-client.enum';
import { DeviceQuality } from 'src/shared/enum/device-quality.enum';

@Component({
  selector: 'app-details-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-contact.component.html',
  styleUrls: ['./details-contact.component.scss'],
})
export class DetailsContactComponent {
  contact: Contact = {
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
  };

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('id');
      console.log({ id });
    });
  }
}
