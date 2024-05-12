package com.sand14.flightschoolschedule.appointment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AppointmentBookingRepository extends JpaRepository<AppointmentBooking, Integer> {
    @Query("""
    SELECT appointmentBooking
    FROM AppointmentBooking appointmentBooking
    WHERE appointmentBooking.appointment.id = :appointmentId
    """)
    List<AppointmentBooking> findByAppointmentId(Integer appointmentId);
}
