package com.sand14.flightschoolschedule.appointment;

import com.sand14.flightschoolschedule.user.User;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AppointmentService {
    private final AppointmentRepository appointmentRepository;
    private final AppointmentMapper appointmentMapper;
    public Integer add(AppointmentRequest request, Authentication connectedUser) {
        User user = ((User) connectedUser.getPrincipal());
        Appointment appointment = appointmentMapper.toAppointment(request);
        appointment.setInstructor(user);
        return appointmentRepository.save(appointment).getId();
    }

    public AppointmentResponse findById(Integer appointmentId) {
        return appointmentRepository.findById(appointmentId).map(appointmentMapper::toAppointmentResponse)
                .orElseThrow(() -> new EntityNotFoundException("No appointment found with id" + appointmentId));
    }

    public List<AppointmentResponse> findAppointmentsByDate(Date date, Authentication connectedUser) {
        User user = ((User) connectedUser.getPrincipal());
        List<Appointment> appointments = appointmentRepository.findByDate(date);
        return appointmentMapper.toAppointmentResponseList(appointments);
    }
}
