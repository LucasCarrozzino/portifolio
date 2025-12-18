import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-tag',
  standalone: false,
  templateUrl: './tag.html',
  styleUrl: './tag.scss'
})
export class Tag {
  @Input({required: true}) status!: "complete" | "in progress" | "abandoned";

}
