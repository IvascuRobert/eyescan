import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { ActivatedRoute } from '@angular/router';
import { DeviceQuality } from 'src/shared/enum/device-quality.enum';
import { TypeOfClient } from 'src/shared/enum/type-of-client.enum';
import { TypeOfReservation } from 'src/shared/enum/type-of-reservation.enum';
import { Contact } from 'src/shared/interface/contact';
import { AddProcessDialogComponent } from '../add-process-dialog/add-process-dialog.component';
import { ProcessStatus } from 'src/shared/enum/process-status.enum';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-details-contact',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
  ],
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
    // audiogramExams: {
    //   rightEar: [
    //     {
    //       src: './assets/images/audio-test-sample.jpg',
    //       createdDate: new Date(),
    //       name: 'Left ear',
    //     },
    //     {
    //       src: './assets/images/audio-test-sample.jpg',
    //       createdDate: new Date(),
    //       name: 'Left ear',
    //     },
    //   ],
    //   leftEar: [
    //     {
    //       src: './assets/images/audio-test-sample.jpg',
    //       createdDate: new Date(),
    //       name: 'Left ear',
    //     },
    //   ],
    //   vocal: [
    //     {
    //       src: './assets/images/audio-test-sample.jpg',
    //       createdDate: new Date(),
    //       name: 'Left ear',
    //     },
    //   ],
    // },
  };

  displayedColumns: string[] = [
    'createdDate',
    'leftEar',
    'rightEar',
    'questionnaire',
    'device',
    'isFinished',
    'actions',
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('id');
      console.log({ id });
    });
  }

  startProcess() {
    const dialogRef = this.dialog.open(AddProcessDialogComponent);

    dialogRef.afterClosed().subscribe((process: any) => {
      if (process) {
        const processObj = {
          createdDate: new Date(),
          leftEar: process.leftEar,
          rightEar: process.rightEar,
          questionnaire: process.questionnaire,
          isFinished: process.isFinished,
        };
        this.contact = { ...this.contact, process: [processObj] };
      }
    });
  }
}
