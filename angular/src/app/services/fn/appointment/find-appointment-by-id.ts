/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AppointmentResponse } from '../../models/appointment-response';

export interface FindAppointmentById$Params {
  'appointment-id': number;
}

export function findAppointmentById(http: HttpClient, rootUrl: string, params: FindAppointmentById$Params, context?: HttpContext): Observable<StrictHttpResponse<AppointmentResponse>> {
  const rb = new RequestBuilder(rootUrl, findAppointmentById.PATH, 'get');
  if (params) {
    rb.path('appointment-id', params['appointment-id'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AppointmentResponse>;
    })
  );
}

findAppointmentById.PATH = '/appointment/{appointment-id}';
