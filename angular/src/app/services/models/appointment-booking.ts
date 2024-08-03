/* tslint:disable */
/* eslint-disable */
import { Appointment } from '../models/appointment';
import { User } from '../models/user';
export interface AppointmentBooking {
  accepted?: boolean;
  answered?: boolean;
  appointment?: Appointment;
  createdBy?: number;
  createdDate?: string;
  id?: number;
  lastModifiedBy?: number;
  lastModifiedDate?: string;
  student?: User;
}
