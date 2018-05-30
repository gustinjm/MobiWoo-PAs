import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs';
import { map } from "rxjs/operators";

@Injectable()
export class PointsOfAttentionService {
 constructor(private http: Http) {}

  get(category) {
    let searchParams = new URLSearchParams();
    searchParams.append('category', category);
    var responseObservable = this.http.get('pointsOfAttention', { search: searchParams });
    return responseObservable
      .pipe(	
      	map(
      		response => { 
      		  return response.json().paItems; 
      		}
      	));
  }
  
}
