import {Component} from '@angular/core';
import { PointsOfAttentionService } from './points-of-attention.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MobiWoo PAs map';
  lat = 50.71649048645257;
  lng = 4.397471272631947;
  zoom = 13;
  category = '';
  
  
  pAItems = [];
  
  constructor(private pointsOfAttentionService: PointsOfAttentionService) {}
  
   ngOnInit() {
    this.getPointsOfAttentionService(this.category);
  }
  
    getPointsOfAttentionService(category) {
    this.category = category;
    this.pointsOfAttentionService.get(category)
      .subscribe(paItems => {
        this.pAItems = paItems;
      });
  }
  
}
