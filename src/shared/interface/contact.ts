import { DeviceQuality } from '../enum/device-quality.enum';
import { TypeOfClient } from '../enum/type-of-client.enum';
import { TypeOfReservation } from '../enum/type-of-reservation.enum';

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  taxCode: string;
  address: string;
  phoneNumber: string;

  birthDate: Date;
  lastAppointmentDate: Date;
  lastBoughtDeviceDate: Date;

  typeOfReservation: TypeOfReservation;
  typeOfClient: TypeOfClient;
  favoriteShop: string;

  deviceQuality: DeviceQuality;
  deviceSerialNumber: string;

  guarantee: Date;
  privacy: boolean;
}
