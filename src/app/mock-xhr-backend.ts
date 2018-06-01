import { HttpEvent, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { HttpBackend } from '@angular/common/http/src/backend';

export class MockXHRBackend implements HttpBackend {
  handle(request: HttpRequest<any>): Observable<HttpEvent<any>> {
    return new Observable((responseObserver: Observer<HttpResponse<any>>) => {
      let responseOptions;
      if (request.urlWithParams.indexOf('pointsOfAttention?category=') >= 0 || request.url === 'pointsOfAttention') {
        let category;
        if (request.urlWithParams.indexOf('?') >= 0) {
           category = request.urlWithParams.split('=')[1];
           if (category === 'undefined') category = '';
        }
        let filteredPAItems;
        if (category) {
          filteredPAItems = this._pAItems.filter(paItem => paItem.category === category);
         } else {
          filteredPAItems = this._pAItems;
         }
         let pAMap = {
          lat: this._pAMap.lat,
          lng: this._pAMap.lng,
          pAItems: filteredPAItems
         }
         responseOptions ={
            body: { pAMap: JSON.parse(JSON.stringify(pAMap)) },
            status: 200
         };
      }
      else if (request.url === 'paMetaData') {
        responseOptions ={
          body: { paCategories: JSON.parse(JSON.stringify(this._paCategories)) },
          status: 200
       };
    }
      const responseObject = new HttpResponse(responseOptions);
      responseObserver.next(responseObject);
      responseObserver.complete();
      return () => {
      };
    }); 

  }
  
   _paCategories = [{
    name: '',
    description: 'All',
    iconUrl: '../assets/grey-dot.png'
  },
  {
    name: 'green',
    description: 'Solved',
    iconUrl: '../assets/green-dot.png'
  },
  {
    name: 'orange',
    description: 'Nice to have',
    iconUrl: '../assets/orange-dot.png'
  },
  {
    name: 'red',
    description: 'Critical',
    iconUrl: '../assets/red-dot.png'
  }
];

_pAMap = {
    lat: 50.71649048645257,
    lng: 4.397471272631947
}

_pAItems = [{
    id: 67,
    lat: 50.713600296946,
    lng: 4.399800458722,
    description: 'Passage pour piétons rue du Gaz',
    category: 'orange',
    iconUrl: '/assets/orange-dot.png'
  },
  {
    id: 61,
    lat: 50.71173294994551,
    lng: 4.398852645368947,
    description: 'Trottoir Boulevard H. Rolin, en face du Delhaize',
    category: 'red',
    iconUrl: '/assets/red-dot.png'
  },
  {
    id: 55,  
    lat: 50.7069934,
    lng: 4.3714322,
    description: 'Chemin des Postes (entre la rue St Germain et la rue des Piles)',
    category: 'orange',
    iconUrl: '/assets/orange-dot.png'
  },
  {
    id: 1,  
    lat: 50.72170274313,
    lng: 4.3845587142334,
    description: 'Au croisement de la drève du Garde et du Sentier de Rhode-St-Genèse',
    category: 'green',
    iconUrl: '/assets/green-dot.png'
  }
  ];
}
