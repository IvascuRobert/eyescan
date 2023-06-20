import { Routes } from '@angular/router';
import { LayoutComponent } from 'src/shared/components/layout/layout.component';

export const APP_ROUTES: Routes = [
  // wrong page
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
  // not found page
  {
    path: '**',
    redirectTo: '',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [{
      path: '',
      loadComponent: () =>
        import('./statistics/statistics.component')
          .then(mod => mod.StatisticsComponent)

    },
    {
      path: 'contacts',
      loadComponent: () =>
        import('./contacts/contacts.component')
          .then(mod => mod.ContactsComponent)
    }
    ]
  }
];
