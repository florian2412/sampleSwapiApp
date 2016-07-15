import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Character } from '../character';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SwapiService {

  private baseUrl = 'http://swapi.co/api/';  // URL to web api
  private outputFormat = '?format=json';

  /*
   private people = 'people/';
   private films = 'films/';
   private planets = 'planets/';
   private species = 'species/';
   private starships = 'starships/';
   private vehicles = 'vehicles/';
   */

  constructor(private http: Http) {}

  public getResourceById(resource: string, id: number): Observable<Character> {
    let completeUrl = this.baseUrl + resource + '/' + id + this.outputFormat;
    return this.http
      .get(completeUrl)
      .map(
        response => {
          console.log(response.json());
          return response.json();
        })
      .catch(this.handleError);
  }


  public getResourceList(resource: string): Observable<any> {
    let completeUrl = this.baseUrl + resource + '/' + this.outputFormat;
    return this.http
      .get(completeUrl)
      .map(response => response.json())
      .catch(this.handleError);
  }


  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
