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
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

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

    @OneToOne(mappedBy = "appointment")
    private AppointmentBooking bookedStudent;

    @ManyToOne
    @JoinColumn(name = "instructor_id")
    private User instructor;

    @ManyToMany
    @JoinTable(
            name = "schedule_eligible_students",
            joinColumns = @JoinColumn(name = "appointment_id"),
            inverseJoinColumns = @JoinColumn(name = "student_id"))
    private List<User> eligibleStudents;

    @Transient
    public List<String> getEligibleStudentsNames() {
        return this.eligibleStudents.stream().map(User::fullName).toList();
    }
}
