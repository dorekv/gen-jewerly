import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Catalog } from './catalog/catalog';
import { Contacts } from './contacts/contacts';
import { Cart } from './cart/cart';
import { SignIn } from './sign-in/sign-in';
import { Registration } from './registration/registration';

export const routes: Routes = [
  { path: '', component: Home },  // deafault 
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'catalog', component: Catalog },
  { path: 'catalog/:filter', component: Catalog },
  { path: 'contacts', component: Contacts },
  { path: 'cart', component: Cart },
  { path: 'sign-in', component: SignIn },
  { path: 'registration', component: Registration}
];