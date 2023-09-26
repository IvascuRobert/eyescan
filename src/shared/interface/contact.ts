import { DeviceQuality } from '../enum/device-quality.enum';
import { ProcessStatus } from '../enum/process-status.enum';
import { TypeOfClient } from '../enum/type-of-client.enum';
import { TypeOfReservation } from '../enum/type-of-reservation.enum';
import { AudiogramExams } from './audiogram-exams';

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

  audiogramExams?: AudiogramExams;
  process?: [
    {
      createdDate?: Date;
      leftEar?: number;
      rightEar?: number;
      questionnaire?: number;
      device?: any;
      isFinished?: boolean
    }
  ];


}
