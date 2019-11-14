import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ActorComponent} from './actor/actor.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FilmComponent} from './film/film.component';

const routes: Routes = [
  {path: '', component: NavbarComponent},
  {path: 'actors', component: ActorComponent}
  ];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
