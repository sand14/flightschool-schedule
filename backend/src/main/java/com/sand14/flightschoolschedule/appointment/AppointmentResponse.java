package com.sand14.flightschoolschedule.appointment;

import lombok.*;

import java.sql.Time;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AppointmentResponse {
    private Integer id;
    private Date date;
    private Time startTime;
    private Time endTime;
    private boolean isAvailable;
    private String instructor;
    private String bookedStudent;
    private List<String> eligibleStudents;
}
