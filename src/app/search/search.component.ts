import { Component } from '@angular/core';
import { TracksService } from '../services/tracks.service';
import { FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  results$: Observable<any[]>;
  private searchField: FormControl;
  // instantiate tracks to an empty array
  tracks = [];
  busqueda = [];
  // loading: Boolean;

  constructor(private tss: TracksService, private http: Http) {
    // const headers = new Headers({"Access-Control-Allow-Headers":"*"});

    const URL = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search';

    this.searchField = new FormControl();
    this.results$ = this.searchField.valueChanges
      .debounceTime(100)
      .switchMap(query => this.http.get(`${URL}?q=${query}`))
      .map(response => response.json())
      .map(response => response.data);
    // this.loading = false;
  }
}
