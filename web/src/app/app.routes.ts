import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/shell/shell').then((component) => component.Shell),
    children: [
      {
        path: '',
        title: 'Lume',
        loadComponent: () => import('./features/home/home').then((component) => component.Home),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
