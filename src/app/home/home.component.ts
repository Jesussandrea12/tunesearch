import { Component, OnInit } from '@angular/core';
import { TracksService } from '../services/tracks.service';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // instantiate tracks to an empty array
  tracks = [];
  loading = true;

  constructor(private service: TracksService, private http: Http) {
    // const headers = new Headers({"Access-Control-Allow-Headers":"*"});
  }

  ngOnInit() {
    this.service.getAllTracks().subscribe(response => {
      this.tracks = response.data;
      this.loading = false;
    });
  }
}
