import { Routes } from '@angular/router';
import { LayoutComponent } from 'src/shared/components/layout/layout.component';

export const APP_ROUTES: Routes = [
  // wrong page
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'contacts'
  },
  // not found page
  // {
  //   path: '**',
  //   redirectTo: '',
  // },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'statistics',
        loadComponent: () =>
          import('./statistics/statistics.component')
            .then(mod => mod.StatisticsComponent)

      },
      {
        path: 'contacts',
        loadComponent: () =>
          import('./contacts/contacts.component')
            .then(mod => mod.ContactsComponent)
      },
      {
        path: 'appointments',
        loadComponent: () =>
          import('./appointments/appointments.component')
            .then(mod => mod.AppointmentsComponent)
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./products/products.component')
            .then(mod => mod.ProductsComponent)
      }
    ]
  }
];
