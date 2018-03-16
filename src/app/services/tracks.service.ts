import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TracksService {

  constructor(private http: Http) { }

  // Get all tracks from the API
  getAllTracks() {
  // const headers = new Headers({"Access-Control-Allow-Headers":"*"});
  // return this.http.post(this.API_ENDPOINT+'/lugares.json', lugar, {headers:headers});
    return this.http.get('http://localhost:3000/api/tracks')
      .map(res => res.json());
  }
}
