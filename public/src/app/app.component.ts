import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { HttpService } from "./http.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ){}
  title = 'Pet Shelter';
  paramsId: any;

  ngOnInit(){
    // this._route.parent.params.subscribe(params => console.log(`The Parent params: ${params}`));
    // this._route.params.subscribe((params: Params) =>{
    //   console.log(params['brand']);
    //   this.paramsId = params['brand'];
    // });
  }
}
