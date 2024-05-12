package com.sand14.flightschoolschedule.appointment;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentBookingRepository extends JpaRepository<AppointmentBooking, Integer> {

}
