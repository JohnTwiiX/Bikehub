import { Routes } from '@angular/router';
import { HomepageComponent } from './views/homepage/homepage.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { LoginComponent } from './views/login/login.component';
import { RegistrationComponent } from './views/registration/registration.component';
import { ShopComponent } from './views/shop/shop.component';

export const routes: Routes = [
    {
        path: '',
        component: HomepageComponent,
        title: 'BikeHub'
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'registration',
        component: RegistrationComponent,
    },
    {
        path: 'shop',
        component: ShopComponent
    },
    { path: '**', component: PageNotFoundComponent }
];
