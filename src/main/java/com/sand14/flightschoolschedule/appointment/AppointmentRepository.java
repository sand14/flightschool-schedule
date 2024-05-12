package com.sand14.flightschoolschedule.appointment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment, Integer> {
    @Query("""
    SELECT appointment
    FROM Appointment appointment
    WHERE appointment.date = :date
    """)
    List<Appointment> findByDate(Date date);
}
