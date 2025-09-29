import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portifolio');
    constructor(private _router:Router){}

  public onNavBtnClicked(navPath:string){
    this._router.navigate(["/"+navPath]);

  }
}
