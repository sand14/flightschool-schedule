/* tslint:disable */
/* eslint-disable */
import { User } from '../models/user';
export interface Appointment {
  available?: boolean;
  bookedStudent?: User;
  createdBy?: number;
  createdDate?: string;
  date?: string;
  endTime?: string;
  id?: number;
  instructor?: User;
  lastModifiedBy?: number;
  lastModifiedDate?: string;
  startTime?: string;
}
