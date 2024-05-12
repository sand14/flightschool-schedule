package com.sand14.flightschoolschedule.appointment;

import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("appointment")
@RequiredArgsConstructor
@Tag(name = "appointment")
public class AppointmentController {
    private final AppointmentService service;

    @PostMapping
    public ResponseEntity<Integer> addAppointment(@RequestBody @Valid AppointmentRequest request, Authentication connectedUser) {

        return ResponseEntity.ok(service.add(request, connectedUser));
    }

    @GetMapping("{appointment-id}")
    public ResponseEntity<AppointmentResponse> findAppointmentById(@PathVariable("appointment-id") Integer appointmentId){
        return ResponseEntity.ok(service.findById(appointmentId));
    }

    @GetMapping
    public ResponseEntity<List<AppointmentResponse>> findAppointmentsByDate(@RequestParam(name = "date") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date date,
                                                                            Authentication connectedUser){
        return ResponseEntity.ok(service.findAppointmentsByDate(date, connectedUser));
    }

}
