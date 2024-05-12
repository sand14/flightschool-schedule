package com.sand14.flightschoolschedule.appointment;

import com.sand14.flightschoolschedule.common.BaseEntity;
import com.sand14.flightschoolschedule.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

import java.sql.Time;
import java.util.Date;


@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
public class Appointment extends BaseEntity {
    private Date date;
    private Time startTime;
    private Time endTime;
    private boolean isAvailable;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private User bookedStudent;

    @ManyToOne
    @JoinColumn(name = "instructor_id")
    private User instructor;

}
