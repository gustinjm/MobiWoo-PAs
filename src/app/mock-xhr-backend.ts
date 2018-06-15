import { HttpEvent, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { HttpBackend } from '@angular/common/http/src/backend';


export class MockXHRBackend implements HttpBackend {
  /*
  This class is currently unused
  */
  handle(request: HttpRequest<any>): Observable<HttpEvent<any>> {
    return new Observable((responseObserver: Observer<HttpResponse<any>>) => {
      let responseOptions;
      if (request.url === 'pointsOfAttentionMap') {
        responseOptions ={
  //        body: { pAMap: JSON.parse(JSON.stringify(this._pAMap)) },
          status: 200
        };
      }
      else if (request.url === 'paMetaData') {
        responseOptions ={
//          body: { paCategories: JSON.parse(JSON.stringify(this._paCategories)) },
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
  

}
