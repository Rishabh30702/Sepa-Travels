import { Routes } from '@angular/router';
import { NavbarComponent } from './Navbar/navbar/navbar/navbar.component';
import { HomeComponent } from './Home/home/home.component';
import { AboutComponent } from './About/about/about.component';
import { ServiceComponent } from './Services/service/service.component';

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
    }
];
