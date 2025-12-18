import { Component } from '@angular/core';
import {CardData, projectStatus}from '../card/card';


@Component({
  selector: 'app-projects-page',
  standalone: false,
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.scss'
})
export class ProjectsPage {
  public cards: CardData[] = [
    {
      title:'projeto 1',
      description:'descrição do projeto 1',
      imageSrc:'assets/printGit.png',
      status:projectStatus.IN_PROGRESS
    },
    {
      title:'projeto 2',
      description:'descrição do projeto 2',
      imageSrc:'assets/printGit.png',
      status:projectStatus.IN_PROGRESS

    },
    {
      title:'projeto 3',
      description:'descrição do projeto 3',
      imageSrc:'assets/printGit.png',
      status:projectStatus.IN_PROGRESS
    },
    {
      title:'projeto 4',
      description:'descrição do projeto 4',
      imageSrc:'assets/printGit.png',
      status:projectStatus.IN_PROGRESS
    }
  ]
}
