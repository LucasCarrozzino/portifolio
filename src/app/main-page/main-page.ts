import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: false,
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss'
})
export class MainPage {
  constructor(private _router:Router){}
  
  public onClickExplore(){
    this._router.navigate(["/about"]);
  }
}
