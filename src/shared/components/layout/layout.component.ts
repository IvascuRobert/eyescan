import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterModule,
    MatIconModule,
    MatTabsModule,
    MatListModule,
    HeaderComponent
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  links = [
    {
      isActive: false,
      name: 'appointments',
      route: '/appointments',
      icon: 'info'
    },
    {
      isActive: true,
      name: 'contacts',
      route: '/contacts',
      icon: 'info'
    },
    {
      isActive: false,
      name: 'products',
      route: '/products',
      icon: 'info'
    },
    {
      isActive: true,
      name: 'statistics',
      route: '/statistics',
      icon: 'info'
    }
  ]
}
