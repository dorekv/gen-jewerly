import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Catalog } from './catalog/catalog';
import { Contacts } from './contacts/contacts'; 

export const routes: Routes = [
  { path: '', component: Home },           // deafault 
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'catalog', component: Catalog },
  { path: 'contacts', component: Contacts }
];