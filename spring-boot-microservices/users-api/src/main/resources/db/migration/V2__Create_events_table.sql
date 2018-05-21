create table EVENTS (
    ID serial,
    TITLE varchar(100) NOT NULL,
    CATEGORY varchar(100) NOT NULL,
    DESCRIPTION varchar(100) NOT NULL,
    EVENT_DATE TIMESTAMP NOT NULL,
    ADDRESS varchar(100) NOT NULL,
    CONTACT_NAME varchar(100) NOT NULL,
    CONTACT_PHONE varchar(100) NOT NULL,
    CONTACT_EMAIL varchar(100) NOT NULL
);