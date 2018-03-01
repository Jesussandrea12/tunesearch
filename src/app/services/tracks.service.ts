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
    return this.http.get('/api/tracks')
      .map(res => res.json());
  }
 //  public obtenerResultados(busqueda){
 //  https://api.deezer.com/search?q=eminem
 //  return this.http.get('https://api.deezer.com/search?q='+busqueda);
 // }
}
