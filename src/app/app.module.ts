import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

import { TracksService } from './services/tracks.service';
import { MinutesPipe } from './pipes/minutes.pipe';
import { PlaylistsComponent } from './playlists/playlists.component';

// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'playlists',
    component: PlaylistsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MinutesPipe,
    SearchComponent,
    PlaylistsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [TracksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
