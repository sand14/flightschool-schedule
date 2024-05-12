package com.sand14.flightschoolschedule.appointment;

import jakarta.validation.constraints.NotNull;

import java.sql.Time;
import java.util.Date;

public record AppointmentRequest(Integer id,
                                 @NotNull(message = "100")
                                 Date date,
                                 @NotNull(message = "101")
                                 Time startTime,
                                 @NotNull(message = "102")
                                 Time endTime,
                                 boolean isAvailable) {
}
