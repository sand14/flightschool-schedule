package com.sand14.flightschoolschedule.appointment;

import com.sand14.flightschoolschedule.exception.OperationNotPermittedException;
import com.sand14.flightschoolschedule.user.User;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AppointmentBookingService {
    private final AppointmentRepository appointmentRepository;
    private final AppointmentBookingRepository appointmentBookingRepository;

    public Integer bookAppointment(Integer appointmentId, Authentication connectedUser) {
        Appointment appointment = appointmentRepository.findById(appointmentId) .orElseThrow(() -> new EntityNotFoundException("No appointment found with ID:: " + appointmentId));
        if (!appointment.isAvailable() || appointment.getBookedStudent() != null){
            throw new OperationNotPermittedException("Appointment is not available");
        }
        User user = ((User) connectedUser.getPrincipal());
        AppointmentBooking appointmentBooking = AppointmentBooking.builder()
                .appointment(appointment)
                .student(user)
                .build();

        return appointmentBookingRepository.save(appointmentBooking).getId();
    }

    public void approveBooking(Integer appointmentBookingId) {
        AppointmentBooking appointmentBooking = appointmentBookingRepository.findById(appointmentBookingId).orElseThrow(() -> new EntityNotFoundException("No booking found with ID:: " + appointmentBookingId));
        Appointment appointment = appointmentBooking.getAppointment();

        if (appointment.getBookedStudent() != null){
            throw new OperationNotPermittedException("Appointment already booked");
        }

        appointment.setBookedStudent(appointmentBooking.getStudent());
        appointmentRepository.save(appointment);
        appointmentBooking.setAccepted(true);
        appointmentBooking.setAnswered(true);
        appointmentBookingRepository.save(appointmentBooking);
    }

    public void denyBooking(Integer appointmentBookingId) {
        AppointmentBooking appointmentBooking = appointmentBookingRepository.findById(appointmentBookingId).orElseThrow(() -> new EntityNotFoundException("No booking found with ID:: " + appointmentBookingId));
        appointmentBooking.setAccepted(false);
        appointmentBooking.setAnswered(true);
        appointmentBookingRepository.save(appointmentBooking);
    }
}
