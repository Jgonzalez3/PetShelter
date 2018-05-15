import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {
  title = "Details about"
  pet: any;
  paramId: any;
  liked = false;
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) =>{
      console.log(params['id']);
      this.paramId = params['id'];
    });
    this.getPetFromService();

  }
  getPetFromService(){
    let obs = this._httpService.getPet(this.paramId);
    obs.subscribe(data=>{
      console.log("DATA PET", data);
      console.log("Any Errors", data['error']);
      this.pet = data['pet'];
    })
  }
  deletePet(){
    let obs = this._httpService.deletePet(this.paramId);
    obs.subscribe(data=>{
      console.log("DATA DELETE", data);
      console.log("Any Errors?", data['error']);
    })
    this.redirectHome();
  }
  redirectHome(){
    this._router.navigate(['/']);
  }
  likePet(){
    this.liked = true;
    this.pet.likes++;
    console.log(this.pet);
    let obs = this._httpService.likePet(this.paramId, this.pet);
    obs.subscribe(data=>{
      console.log("Like Data", data);
      console.log("Any Errors", data['error']);
    })
  }
}
