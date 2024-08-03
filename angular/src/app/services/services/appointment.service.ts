/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addAppointment } from '../fn/appointment/add-appointment';
import { AddAppointment$Params } from '../fn/appointment/add-appointment';
import { AppointmentResponse } from '../models/appointment-response';
import { findAppointmentById } from '../fn/appointment/find-appointment-by-id';
import { FindAppointmentById$Params } from '../fn/appointment/find-appointment-by-id';
import { findAppointmentsByDate } from '../fn/appointment/find-appointments-by-date';
import { FindAppointmentsByDate$Params } from '../fn/appointment/find-appointments-by-date';

@Injectable({ providedIn: 'root' })
export class AppointmentService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findAppointmentsByDate()` */
  static readonly FindAppointmentsByDatePath = '/appointment';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAppointmentsByDate()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAppointmentsByDate$Response(params: FindAppointmentsByDate$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AppointmentResponse>>> {
    return findAppointmentsByDate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAppointmentsByDate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAppointmentsByDate(params: FindAppointmentsByDate$Params, context?: HttpContext): Observable<Array<AppointmentResponse>> {
    return this.findAppointmentsByDate$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AppointmentResponse>>): Array<AppointmentResponse> => r.body)
    );
  }

  /** Path part for operation `addAppointment()` */
  static readonly AddAppointmentPath = '/appointment';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addAppointment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addAppointment$Response(params: AddAppointment$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return addAppointment(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addAppointment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addAppointment(params: AddAppointment$Params, context?: HttpContext): Observable<number> {
    return this.addAppointment$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findAppointmentById()` */
  static readonly FindAppointmentByIdPath = '/appointment/{appointment-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAppointmentById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAppointmentById$Response(params: FindAppointmentById$Params, context?: HttpContext): Observable<StrictHttpResponse<AppointmentResponse>> {
    return findAppointmentById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAppointmentById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAppointmentById(params: FindAppointmentById$Params, context?: HttpContext): Observable<AppointmentResponse> {
    return this.findAppointmentById$Response(params, context).pipe(
      map((r: StrictHttpResponse<AppointmentResponse>): AppointmentResponse => r.body)
    );
  }

}
