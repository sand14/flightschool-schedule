/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface AcceptBooking$Params {
  appointmentbookingId: number;
}

export function acceptBooking(http: HttpClient, rootUrl: string, params: AcceptBooking$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
  const rb = new RequestBuilder(rootUrl, acceptBooking.PATH, 'post');
  if (params) {
    rb.path('appointmentbookingId', params.appointmentbookingId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<{
      }>;
    })
  );
}

acceptBooking.PATH = '/booking/accept/{appointmentbookingId}';
