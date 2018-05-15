import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {
  title = "Edit this pet";
  pet: any;
  paramId: any;
  skill1: string;
  skill2: string;
  skill3: string;
  uniqueName: string;
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
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
      console.log("PET UPDATE DATA", data);
      console.log("Any Errors?", data['error']);
      this.pet = data['pet'];
      this.skill1 =  this.pet.skills[0];
      this.skill2 =  this.pet.skills[1];
      this.skill3 =  this.pet.skills[2];
    })
  }
  updatePet(){
    if(this.pet.name.length > 2 && this.pet.type.length > 2 && this.pet.description.length > 2){
      this.uniqueName = null;
      this.pet.skills[0] = this.skill1;
      this.pet.skills[1] = this.skill2;
      this.pet.skills[2] = this.skill3;
      console.log(this.pet);
      let obs = this._httpService.editPet(this.paramId, this.pet);
      obs.subscribe(data=>{
        console.log("Update data", data);
        console.log("Any Errors", data['error']);
        if(data['error']){
          this.uniqueName =  data['error']['errors']['name']['message'];
          console.log(this.uniqueName);
        }
        if(!this.uniqueName){
          this.redirectPetDetails();
        }
      })
    }
  }
  redirectPetDetails(){
    this._router.navigate(['/details/'+ this.paramId])
  }
}
