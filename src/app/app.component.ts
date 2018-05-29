import {Component} from '@angular/core';

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
  pAItems = [{
    lat: 50.713600296946,
    lng: 4.399800458722,
    description: 'passage pour piètons rue du gaz'
  },
  {
    lat: 50.71173294994551,
    lng: 4.398852645368947,
    description: 'Trottoir Boulevard H. Rolin, en face du Delhaize'
  },
  {
    lat: 50.7069934,
    lng: 4.3714322,
    description: 'Chemin des Postes (entre la rue St Germain et la rue des Piles)'
  }
  ];
}
