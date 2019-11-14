import {Component, Input, OnInit} from '@angular/core';
import {ActorService} from '../services/actor/actor.service';
import {Actor} from '../models/actor';
import {Film} from '../models/film';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  @Input()
  film: Film;
  actors: [Actor];
  constructor(private actorService: ActorService) { }

  ngOnInit() {
    this.actorService.getActors().subscribe( actor => {
      this.actors = actor;
    });
  }

}
