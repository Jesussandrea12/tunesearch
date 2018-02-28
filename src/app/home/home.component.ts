import { Component, OnInit } from '@angular/core';
import { TracksService } from '../services/tracks.service';
import { FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  results$: Observable<any[]>;
  private searchField: FormControl;
  // instantiate tracks to an empty array
  tracks = [];
  busqueda = [];

  constructor(private tss: TracksService, private http: Http) {

    const URL = 'https://api.deezer.com/search';
    this.searchField = new FormControl();
    this.results$ = this.searchField.valueChanges
      // .debounceTime(500)
      .switchMap(query => this.http.get(`${URL}?q=${query}`))
      .map(response => response.json())
      .map(response => response.data);
  }

  ngOnInit() {
    // Retrieve posts from the API
    this.tss.getAllTracks().subscribe(response => {
      this.tracks = response.data;
    });
  }
}
