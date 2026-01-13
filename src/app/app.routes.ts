import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ProjectsComponent } from './page/projects/projects.component';
import { ContactComponent } from './page/contact/contact.component';

export const routes: Routes = [

    {
        path:"",
        component:HomeComponent
    },
    {
        path:"contact",
        component:ContactComponent
    },
    {
        path:"projects",
        component:ProjectsComponent
    }

];
