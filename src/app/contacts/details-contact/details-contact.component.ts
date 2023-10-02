import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { DeviceQuality } from 'src/shared/enum/device-quality.enum';
import { TypeOfClient } from 'src/shared/enum/type-of-client.enum';
import { TypeOfReservation } from 'src/shared/enum/type-of-reservation.enum';
import { Contact } from 'src/shared/interface/contact';
import { AddProcessDialogComponent } from '../add-process-dialog/add-process-dialog.component';
import { ProcessStatus } from 'src/shared/enum/process-status.enum';

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
  };

  displayedColumns: string[] = [
    'createdDate',
    'leftEar',
    'rightEar',
    'questionnaire',
    'deviceLeftEar',
    'deviceRightEar',
    'status',
    'actions',
  ];

  actions = [
    { name: 'Go to order page', icon: 'dialpad' },
    { name: 'Force end process', icon: 'dialpad' },
    { name: 'Update', icon: 'dialpad' },
    { name: 'Remove', icon: 'dialpad' },
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('id');
      console.log({ id });
    });
  }

  startProcess() {
    const dialogRef = this.dialog.open(AddProcessDialogComponent);

    dialogRef
      .afterClosed()
      .subscribe(
        ({
          leftEar,
          rightEar,
          questionnaire,
          deviceLeftEar,
          deviceRightEar,
        }: any) => {
          const status =
            leftEar > 25 || rightEar > 25
              ? ProcessStatus.OPEN
              : ProcessStatus.END;

          const processObj = {
            createdDate: new Date(),
            leftEar,
            rightEar,
            questionnaire,
            deviceLeftEar,
            deviceRightEar,
            status,
          };

          this.contact = {
            ...this.contact,
            process: [processObj],
          };
        }
      );
  }
}
