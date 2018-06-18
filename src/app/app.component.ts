import { Component } from '@angular/core';
import { PointsOfAttentionService } from './points-of-attention.service';
import { PointsOfAttentionMetadataService } from './pa-metadata.service';
import { PointOfAttention } from './point-of-attention';
import { MatTooltip } from '@angular/material';

import { AgmInfoWindow } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MobiWoo PAs map';
  lat = null;
  lng = null;
  zoom = 13;
  category;
  pAItems = [];
  categories = [];

  constructor(private pointsOfAttentionService: PointsOfAttentionService,
    private paMetaDataService: PointsOfAttentionMetadataService) { }

  ngOnInit() {
    this.getPAMap();
    this.getPAMetaData();
  }

  isSelected(category){
    return this.category === category;
  }

  selectCategory(category) {
    this.category = category;
    this.pointsOfAttentionService.getPointsOfAttentionByCategory(category.name)
      .subscribe(pAItems => {
        this.pAItems = pAItems;
      }
      );
  }

  getPAMap() {
    this.pointsOfAttentionService.getPAMap()
      .subscribe(pAMap => {
        this.pAItems = pAMap.paItems;
        this.lat = pAMap.lat;
        this.lng = pAMap.lng;
      }
      );
  }

  getPAMetaData() {
    this.paMetaDataService.get()
      .subscribe(paCategories => {
        this.categories = paCategories;
        this.category = paCategories[0];
      });
  }

  showToolTip(m: PointOfAttention, $event: MouseEvent) {
    console.log("showToolTip", m.description, $event);
  }

  hideToolTip(m: PointOfAttention, $event: MouseEvent) {
    console.log("hideToolTip", m.description, $event);
  }
}
