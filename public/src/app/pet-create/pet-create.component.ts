import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-pet-create',
  templateUrl: './pet-create.component.html',
  styleUrls: ['./pet-create.component.css']
})
export class PetCreateComponent implements OnInit {
  title = "Know of a pet needing a home?"
  newpet = {name: "", type: "", description: "", skills: [], likes: 0};
  skill1: string;
  skill2: string;
  skill3: string;
  uniqueName: string;
  constructor(
    private _httpService: HttpService,
    private _router: Router,
  ) { }

  ngOnInit() {

  }
  createPet(){
    if(this.newpet.name.length > 2 && this.newpet.type.length > 2 && this.newpet.description.length > 2){
      this.uniqueName = null;
      this.newpet.skills.push(this.skill1);
      this.newpet.skills.push(this.skill2);
      this.newpet.skills.push(this.skill3);
      console.log(this.newpet);
      let obs = this._httpService.addPet(this.newpet);
      obs.subscribe(data=>{
        console.log("Created", data);
        if(data['error']){
          console.log("Any Errors", data['error']);
          this.uniqueName =  data['error']['errors']['name']['message'];
          console.log(this.uniqueName);
        }
        if(!this.uniqueName){
          this.redirectHome();
        }
      })
    }
  }
  redirectHome(){
    this._router.navigate(['/']);
  }
}
