import { Routes } from '@angular/router';
import { NavbarComponent } from './Core/Layout/navbar/navbar.component';
import { HomeComponent } from './Core/Layout/home/home.component';
import { AboutComponent } from './Core/Layout/about/about.component';
import { ServiceComponent } from './Core/Layout/service/service.component';
import { ContactComponent } from './Core/Layout/contact/contact.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        pathMatch:"full"
    },
    {
        path:'About',
        component:AboutComponent,
    },
    {
        path:"Service",
        component:ServiceComponent
    },
    {
        path:"Contact",
        component:ContactComponent
    }
];
