import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {Film} from '../../models/film';
import {FilmService} from '../../services/film/film.service';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {

  film: Film;
  constructor(public dialogRef: MatDialogRef<AddFilmComponent>, private filmService: FilmService) { }

  add() {
    this.filmService.add(this.film).subscribe(res => {
      this.dialogRef.close();
    });
  }
  ngOnInit() {
    this.film = new Film();
  }

}
