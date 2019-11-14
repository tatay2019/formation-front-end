import { Component, OnInit } from '@angular/core';
import {FilmService} from '../services/film/film.service';
import {Film} from '../models/film';
import {Observable} from 'rxjs';
import {MatDialog} from '@angular/material';
import {AddFilmComponent} from './add-film/add-film.component';
import {RemoveFilmComponent} from './remove-film/remove-film.component';

@Component({
  selector: 'app-person',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  films: Film[];
  constructor(public dialog: MatDialog, private personService: FilmService ) { }

  ngOnInit() {
    this.lister();
  }

  lister() {
    this.personService.list().subscribe( film => {
      this.films = film;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddFilmComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe( result => {
      this.ngOnInit();
    });
  }

  openDialogRemove(idr): void {
    const dialogRef = this.dialog.open(RemoveFilmComponent,
      {
        width: '400',
        data: {
          id: idr
        }
      });
    dialogRef.afterClosed().subscribe( result => {
      this.ngOnInit();
    });
  }



}
