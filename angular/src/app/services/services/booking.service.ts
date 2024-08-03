/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { acceptBooking } from '../fn/booking/accept-booking';
import { AcceptBooking$Params } from '../fn/booking/accept-booking';
import { addBooking } from '../fn/booking/add-booking';
import { AddBooking$Params } from '../fn/booking/add-booking';
import { AppointmentBooking } from '../models/appointment-booking';
import { denyBooking } from '../fn/booking/deny-booking';
import { DenyBooking$Params } from '../fn/booking/deny-booking';
import { getAppointmentBookings } from '../fn/booking/get-appointment-bookings';
import { GetAppointmentBookings$Params } from '../fn/booking/get-appointment-bookings';

@Injectable({ providedIn: 'root' })
export class BookingService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAppointmentBookings()` */
  static readonly GetAppointmentBookingsPath = '/booking/{appointmentid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAppointmentBookings()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAppointmentBookings$Response(params: GetAppointmentBookings$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AppointmentBooking>>> {
    return getAppointmentBookings(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAppointmentBookings$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAppointmentBookings(params: GetAppointmentBookings$Params, context?: HttpContext): Observable<Array<AppointmentBooking>> {
    return this.getAppointmentBookings$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AppointmentBooking>>): Array<AppointmentBooking> => r.body)
    );
  }

  /** Path part for operation `addBooking()` */
  static readonly AddBookingPath = '/booking/{appointmentid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addBooking()` instead.
   *
   * This method doesn't expect any request body.
   */
  addBooking$Response(params: AddBooking$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return addBooking(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addBooking$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  addBooking(params: AddBooking$Params, context?: HttpContext): Observable<number> {
    return this.addBooking$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `denyBooking()` */
  static readonly DenyBookingPath = '/booking/deny/{appointmentbookingId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `denyBooking()` instead.
   *
   * This method doesn't expect any request body.
   */
  denyBooking$Response(params: DenyBooking$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return denyBooking(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `denyBooking$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  denyBooking(params: DenyBooking$Params, context?: HttpContext): Observable<{
}> {
    return this.denyBooking$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `acceptBooking()` */
  static readonly AcceptBookingPath = '/booking/accept/{appointmentbookingId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `acceptBooking()` instead.
   *
   * This method doesn't expect any request body.
   */
  acceptBooking$Response(params: AcceptBooking$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return acceptBooking(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `acceptBooking$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  acceptBooking(params: AcceptBooking$Params, context?: HttpContext): Observable<{
}> {
    return this.acceptBooking$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

}
