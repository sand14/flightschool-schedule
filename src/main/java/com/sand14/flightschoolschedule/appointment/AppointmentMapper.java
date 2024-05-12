package com.sand14.flightschoolschedule.appointment;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AppointmentMapper {
    public Appointment toAppointment(AppointmentRequest request) {
        return Appointment
                .builder()
                .id(request.id())
                .date(request.date())
                .startTime(request.startTime())
                .endTime(request.endTime())
                .isAvailable(request.isAvailable())
                .build();
    }

    public AppointmentResponse toAppointmentResponse(Appointment appointment) {
        AppointmentResponse appointmentResponse = AppointmentResponse.builder()
                .id(appointment.getId())
                .date(appointment.getDate())
                .startTime(appointment.getStartTime())
                .endTime(appointment.getEndTime())
                .isAvailable(appointment.isAvailable())
                .instructor(appointment.getInstructor().fullName())
                .eligibleStudents(appointment.getEligibleStudentsNames()).build();

        if (appointment.getBookedStudent() != null) {
            appointmentResponse.setBookedStudent(appointment.getBookedStudent().getStudent().fullName());
        }

        return appointmentResponse;
    }

    public List<AppointmentResponse> toAppointmentResponseList(List<Appointment> appointments) {
        return appointments.stream()
                .map(this::toAppointmentResponse)
                .collect(Collectors.toList());
    }
}
