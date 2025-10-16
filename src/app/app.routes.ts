import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },        // корневой маршрут
  { path: 'home', component: Home }     // отдельный маршрут /home
];