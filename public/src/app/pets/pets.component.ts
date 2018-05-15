import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  title = "These pets are looking for a home!"
  pets: any;
  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getPetsFromService()
  }
  getPetsFromService(){
    let obs = this._httpService.getPets();
    obs.subscribe(data=>{
      console.log("Pets", data);
      console.log("Any Errors", data["error"]);
      this.pets = data['pets'];
      console.log(this.pets);
    })
  }
}
