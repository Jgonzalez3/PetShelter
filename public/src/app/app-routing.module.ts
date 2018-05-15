import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PetsComponent } from './pets/pets.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { PetCreateComponent } from './pet-create/pet-create.component';

const routes: Routes = [
  {path: '', component: PetsComponent},
  {path: 'new', component: PetCreateComponent},
  {path: 'details/:id', component: PetDetailsComponent},
  {path: 'edit/:id', component: PetEditComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
