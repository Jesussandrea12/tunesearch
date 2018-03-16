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
  // instantiate tracks to an empty array
  tracks = [];
  busqueda = [];
  loading = true;

  constructor(private tss: TracksService, private http: Http) {
    // const headers = new Headers({"Access-Control-Allow-Headers":"*"});
  }

  ngOnInit() {
    // Retrieve posts from the API
    this.tss.getAllTracks().subscribe(response => {
      this.tracks = response.data;
      this.loading = false;
    });
  }
}
