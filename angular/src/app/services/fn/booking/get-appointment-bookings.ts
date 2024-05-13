/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AppointmentBooking } from '../../models/appointment-booking';

export interface GetAppointmentBookings$Params {
  appointmentid: number;
}

export function getAppointmentBookings(http: HttpClient, rootUrl: string, params: GetAppointmentBookings$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AppointmentBooking>>> {
  const rb = new RequestBuilder(rootUrl, getAppointmentBookings.PATH, 'get');
  if (params) {
    rb.path('appointmentid', params.appointmentid, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<AppointmentBooking>>;
    })
  );
}

getAppointmentBookings.PATH = '/booking/{appointmentid}';
