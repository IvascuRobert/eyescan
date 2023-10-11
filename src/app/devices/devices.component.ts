import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Device } from 'src/shared/interface/device';
import { AddDeviceDialogComponent } from './add-device-dialog/add-device-dialog.component';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
  ],
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
})
export class DevicesComponent {
  devicesAndAccessories = new MatTableDataSource<Device>([
    {
      id: Math.floor(1000 + Math.random() * 9000),
      name: 'Device 1',
      brand: 'brand-0',
      serialNumber: 'FJAJF123',
      type: 'type-0',
      aslGroup: 'aslGroup-0',
      battery: 'battery-0',
      client: '1',
      color: '#FFF',
      createdDate: new Date(),
      location: 'location-0',
      number: '123',
      price: 1000,
      qualityLevel: 'quality-0',
      status: 'free',
    },
  ]);

  displayedColumns: string[] = [
    'id',
    'name',
    'brand',
    'serialNumber',
    'aslGroup',
    'battery',
    'client',
    'color',
    'createdDate',
    'location',
    'number',
    'price',
    'qualityLevel',
    'status',
    'actions',
  ];

  actions = [
    { name: 'Reserved', icon: 'dialpad' },
    { name: 'Delete', icon: 'dialpad' },
    { name: 'Edit', icon: 'dialpad' },
    { name: 'View', icon: 'dialpad' },
    { name: 'History', icon: 'dialpad' },
  ];

  constructor(public dialog: MatDialog, private fb: FormBuilder) {}

  addDeviceOrAccessories(): void {
    const dialogRef = this.dialog.open(AddDeviceDialogComponent);

    dialogRef.afterClosed().subscribe((device: any) => {
      if (device) {
        device.status = 'free';
        this.addDeviceOrAccessoriesInTable(device);
      }
    });
  }

  private addDeviceOrAccessoriesInTable(device: any): void {
    this.devicesAndAccessories.data = [
      ...this.devicesAndAccessories.data,
      device,
    ];
  }
}
