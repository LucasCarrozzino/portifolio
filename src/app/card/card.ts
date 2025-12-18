import { Component, Input } from '@angular/core';

export enum projectStatus {
  COMPLETE = "complete",
  IN_PROGRESS = "in progress",
  ABANDONED = "abandoned"
}

export interface CardData {
  title: string;
  description: string;
  imageSrc: string;
  status: projectStatus;
}


@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  @Input({required: true}) data!: CardData;

}
