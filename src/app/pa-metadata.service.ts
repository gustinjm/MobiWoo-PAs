import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class PointsOfAttentionMetadataService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<PaMetaDataResponse>('paMetaData')
      .pipe(	
      	map(
      		(response : PaMetaDataResponse) => { 
      		  return response.paCategories; 
      		}
      	));
  }
}

interface PaMetaDataResponse {
  paCategories: PointOfAttentionCategory[]; 
}

interface PointOfAttentionCategory {
  name: string;
  description: string;
  iconUrl: string;
}

