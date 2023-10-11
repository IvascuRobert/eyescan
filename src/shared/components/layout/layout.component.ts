import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { Store, select } from '@ngrx/store';
import { EyescanActions } from 'src/app/main/state/app.actions';
import { Observable } from 'rxjs';
import { selectToggleDrawer } from 'src/app/main/state/app.selectors';

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
    HeaderComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  links = [
    {
      isActive: false,
      name: 'appointments',
      route: '/appointments',
      icon: 'info',
    },
    {
      isActive: true,
      name: 'contacts',
      route: '/contacts',
      icon: 'info',
    },
    {
      isActive: false,
      name: 'devices',
      route: '/devices',
      icon: 'info',
    },
    {
      isActive: true,
      name: 'statistics',
      route: '/statistics',
      icon: 'info',
    },
  ];
  toggleDrawer$ = new Observable<boolean | null>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.toggleDrawer$ = this.store.pipe(select(selectToggleDrawer));
  }
}
