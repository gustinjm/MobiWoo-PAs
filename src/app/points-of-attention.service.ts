import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

import { PointOfAttention } from './point-of-attention';

@Injectable()
export class PointsOfAttentionService {
  constructor(private http: HttpClient) { }


  getPointsOfAttentionByCategory(category) {
    return this.http.get(POINTS_OF_ATTENTION_URL)
      .pipe(
        map(
          (response: PointsOfAttentionMap) => {
            let items = response.paItems;
            let filteredPAItems;
            if (category) {
              filteredPAItems = items.filter(paItem => paItem.category === category);
            } else {
              filteredPAItems = items;
            }
            return filteredPAItems;
          }
        ));
  }

  getPAMap() {
    return this.http.get(POINTS_OF_ATTENTION_URL)
      .pipe(
        map(
          (response: PointsOfAttentionMap) => {
            return response;
          }
        ));
  }

}

interface PointsOfAttentionMap {
  lat: number;
  lng: number;
  paItems: PointOfAttention[]
}

const POINTS_OF_ATTENTION_URL = 'assets/pa-items.json';






