package com.sand14.flightschoolschedule.appointment;

import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("booking")
@RequiredArgsConstructor
@Tag(name = "booking")
public class AppointmentBookingController {

    private final AppointmentBookingService service;
    private final AppointmentBookingRepository repository;

    @PostMapping("{appointmentid}")
    public ResponseEntity<Integer> addAppointment(@PathVariable Integer appointmentid, Authentication connectedUser) {
        return ResponseEntity.ok(service.bookAppointment(appointmentid, connectedUser));
    }

    @PostMapping("/accept/{appointmentbookingId}")
    public ResponseEntity<?> acceptAppointment(@PathVariable Integer appointmentbookingId) {
        service.approveBooking(appointmentbookingId);
        return ResponseEntity.accepted().build();
    }

    @PostMapping("/deny/{appointmentbookingId}")
    public ResponseEntity<?> denyAppointment(@PathVariable Integer appointmentbookingId) {
        service.denyBooking(appointmentbookingId);
        return ResponseEntity.accepted().build();
    }
    
    @GetMapping("{appointmentid}")
    public ResponseEntity<List<AppointmentBooking>> getAppointmentBookings(@PathVariable Integer appointmentid) {
        return ResponseEntity.ok(repository.findByAppointmentId(appointmentid));
    }
}
