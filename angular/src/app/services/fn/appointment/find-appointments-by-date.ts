/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AppointmentResponse } from '../../models/appointment-response';

export interface FindAppointmentsByDate$Params {
  date: string;
}

export function findAppointmentsByDate(http: HttpClient, rootUrl: string, params: FindAppointmentsByDate$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AppointmentResponse>>> {
  const rb = new RequestBuilder(rootUrl, findAppointmentsByDate.PATH, 'get');
  if (params) {
    rb.query('date', params.date, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<AppointmentResponse>>;
    })
  );
}

findAppointmentsByDate.PATH = '/appointment';
