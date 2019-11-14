import {Component, Inject, OnInit} from '@angular/core';
import {FilmService} from '../../services/film/film.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-remove-film',
  templateUrl: './remove-film.component.html',
  styleUrls: ['./remove-film.component.css']
})
export class RemoveFilmComponent implements OnInit {

  constructor(private filmService: FilmService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<RemoveFilmComponent>) { }

  ngOnInit() {
    console.log(this.data.id);
  }

  remove() {
    this.filmService.remove(this.data.id).subscribe(res => {
      this.dialogRef.close();
    });
  }

}
