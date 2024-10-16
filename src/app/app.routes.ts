import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
      },
      {
        path: 'country/:name',
        loadComponent: () => import('./pages/country-detail/country-detail.component').then(c => c.CountryDetailComponent)
      },
      {
        path: 'region/:region',
        loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
      }
    ]
  }
];
