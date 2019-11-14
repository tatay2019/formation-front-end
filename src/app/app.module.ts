import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FilmComponent } from './film/film.component';
import {MatCardModule, MatDialogModule, MatFormFieldModule, MatGridListModule, MatInputModule, MatTableModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ActorComponent } from './actor/actor.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { AddFilmComponent } from './film/add-film/add-film.component';
import {FormsModule} from '@angular/forms';
import { RemoveFilmComponent } from './film/remove-film/remove-film.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilmComponent,
    ActorComponent,
    AddFilmComponent,
    RemoveFilmComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatTableModule,
    MatCardModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddFilmComponent, RemoveFilmComponent]
})
export class AppModule { }
