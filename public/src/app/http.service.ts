import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: HttpClient
  ) { }
  getPets(){
    return this._http.get('/findpets');
  }
  getPet(id){
    console.log(id);
    return this._http.get('/findpet/' + id)
  }
  addPet(newPet){
    return this._http.post('/pet', newPet)
  }
  editPet(id, Pet){
    console.log(id);
    console.log(Pet);
    return this._http.put('/pet/edit/'+ id, Pet);
  }
  likePet(id, Pet){
    console.log(id);
    console.log(Pet);
    return this._http.put('/pet/like/'+ id, Pet);
  }
  deletePet(id){
    console.log(id);
    return this._http.delete('/pet/delete/'+id)
  }
}
