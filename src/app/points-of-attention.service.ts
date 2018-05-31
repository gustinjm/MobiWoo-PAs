import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from "rxjs/operators";

@Injectable()
export class PointsOfAttentionService {
 constructor(private http: HttpClient) {}

  get(category) {
    let getOptions = {
      params: { category }
    };
    return this.http.get<PointsOfAttentionResponse>('pointsOfAttention', getOptions)
      .pipe(	
      	map(
      		(response : PointsOfAttentionResponse) => { 
      		  return response.pAItems; 
      		}
      	));
  }
}
 

 interface PointsOfAttentionResponse {
  pAItems: PointOfAttention[]
}

interface PointOfAttention {
  id: number;
  lat: number;
  lng: number;
  description: string;
  category: string;
  iconUrl: string;
}

