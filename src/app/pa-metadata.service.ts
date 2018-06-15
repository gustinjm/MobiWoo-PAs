import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class PointsOfAttentionMetadataService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get('assets/pa-categories.json')
      .pipe(	
      	map(
      		(response : PointOfAttentionCategory[]) => { 
      		  return response; 
      		}
      	));
  }
}

interface PointOfAttentionCategory {
  name: string;
  description: string;
  iconUrl: string;
}

