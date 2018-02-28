import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TracksService {

  constructor(private http: Http) { }

  // Get all tracks from the API
  getAllTracks() {
    return this.http.get('http://localhost:3000/api/tracks')
      .map(res => res.json());
  }

 //  public obtenerResultados(busqueda){
 //   // https://api.deezer.com/search?q=eminem
 //   return this.http.get('https://api.deezer.com/search?q='+busqueda);
 // }
}
