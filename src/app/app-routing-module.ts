import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPage } from './main-page/main-page';
import { AboutPage } from './about-page/about-page';
import { ProjectsPage } from './projects-page/projects-page';

const routes: Routes = [
   {
        component: MainPage,
        path:""
    },
    {
        component: ProjectsPage,
        path: "projects"
    },
    {
        component: AboutPage,
        path: "about"
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
