import {Component} from '@angular/core';
import { PointsOfAttentionService } from './points-of-attention.service';
import { PointsOfAttentionMetadataService } from './pa-metadata.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MobiWoo PAs map';
  lat = null;
  lng =  null;
  zoom = 13;
  category = '';
  pAItems = [];
  categories = [];
  
  constructor(private pointsOfAttentionService: PointsOfAttentionService, 
              private paMetaDataService: PointsOfAttentionMetadataService) {}
  
   ngOnInit() {
    this.getPointsOfAttentionService(this.category);
    this.getPAMetaData();
  }
  
    getPointsOfAttentionService(category) {
    this.category = category;
    this.pointsOfAttentionService.get(category.name)
      .subscribe(pAMap => {
        this.pAItems = pAMap.pAItems;
        this.lat = pAMap.lat;
        this.lng = pAMap.lng;
      });
  }

  getPAMetaData() {
    this.paMetaDataService.get()
      .subscribe(paCategories => {
        this.categories = paCategories;
      });
  }

  
}
