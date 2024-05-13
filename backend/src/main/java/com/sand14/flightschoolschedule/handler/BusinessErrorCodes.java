package com.sand14.flightschoolschedule.handler;

import lombok.Getter;
import org.springframework.http.HttpStatusCode;

import static org.springframework.http.HttpStatus.*;

public enum BusinessErrorCodes {

    NO_CODE(0, NOT_IMPLEMENTED, "No code"),
    INCORRECT_CURRENT_PASSWORD(300, BAD_REQUEST, "Current password is incorrect"),
    NEW_PASSWORD_DOES_NOT_MATCH(301, BAD_REQUEST, "The new password does not match"),
    ACCOUNT_LOCKED(302, FORBIDDEN, "User account is locked"),
    ACCOUNT_DISABLED(303, FORBIDDEN, "User account is disabled"),
    BAD_CREDENTIALS(304, FORBIDDEN, "Login and / or Password is incorrect"),
    ;

    @Getter
    private final int code;
    @Getter
    private final String description;
    @Getter
    private final HttpStatusCode httpStatusCode;

    BusinessErrorCodes(int code, HttpStatusCode httpStatusCode, String description) {
        this.code = code;
        this.description = description;
        this.httpStatusCode = httpStatusCode;
    }
}
