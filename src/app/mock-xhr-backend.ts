import { Request, Response, ResponseOptions, RequestMethod } from '@angular/http';
import {Observable, Observer} from 'rxjs';

export class MockXHRBackend {
  constructor() {
  }

  createConnection(request: Request) {
    var response = new Observable((responseObserver: Observer<Response>) => {
      var responseOptions;
      if (request.url.indexOf('pointsOfAttention?category=') >= 0 || request.url === 'pointsOfAttention') {
      	var category;
        if (request.url.indexOf('?') >= 0) {
           category = request.url.split('=')[1];
           if (category === 'undefined') category = '';
        }
        var pAItems;
        if (category) {
           pAItems = this._pAItems.filter(paItem => paItem.category === category);
         } else {
           pAItems = this._pAItems;
         }
         responseOptions = new ResponseOptions({
            body: { paItems: JSON.parse(JSON.stringify(pAItems)) },
            status: 200
         });
      } 
      var responseObject = new Response(responseOptions);
      responseObserver.next(responseObject);
      responseObserver.complete();
      return () => { };
    });
    return { response };
  }

  _pAItems = [{
    id: 67,
    lat: 50.713600296946,
    lng: 4.399800458722,
    description: 'passage pour pi�tons rue du gaz',
    category: "orange"
  },
  {
    id: 61,
    lat: 50.71173294994551,
    lng: 4.398852645368947,
    description: 'Trottoir Boulevard H. Rolin, en face du Delhaize',
    category: "yellow"
  },
  {
    id: 55,  
    lat: 50.7069934,
    lng: 4.3714322,
    description: 'Chemin des Postes (entre la rue St Germain et la rue des Piles)',
    category: "orange"
  },
  {
    id: 1,  
    lat: 50.72170274313,
    lng: 4.3845587142334,
    description: 'Au croisement de la drève du Garde et du Sentier de Rhode-St-Genèse',
    category: "green"
  }
  ];
}
