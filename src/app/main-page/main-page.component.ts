import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})


export class MainPageComponent {
      constructor(private _router:Router){}
  
  public onClickExplore(){
    console.log("entrou porra!!!!!!");
    this._router.navigate(["/about"]);
  }
}
