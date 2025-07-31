import { Routes } from '@angular/router';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MainPageComponent } from './main-page/main-page.component';

export const routes: Routes = [
    {
        component: MainPageComponent,
        path:""
    },
    {
        component: ProjectsPageComponent,
        path: "projects"
    },
    {
        component: AboutPageComponent,
        path: "about"
    }
];
