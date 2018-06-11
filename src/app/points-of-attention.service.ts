import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from "rxjs/operators";

import { PointOfAttention} from './point-of-attention';

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
      		  return response.pAMap; 
      		}
      	));
  }

}

interface PointsOfAttentionResponse {
  pAMap : PointOfAttentionMap 
}

interface PointOfAttentionMap {
  lat: number;
  lng: number;
  pAItems: PointOfAttention[];
}


 



