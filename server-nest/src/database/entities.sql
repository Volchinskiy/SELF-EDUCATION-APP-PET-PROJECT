CREATE TABLE person (
    id             BIGSERIAL      NOT NULL   PRIMARY KEY,
    password       VARCHAR(150)   NOT NULL,
    email          VARCHAR(150)   NOT NULL
);

CREATE TABLE repeat_status (
    id             INTEGER        NOT NULL   PRIMARY KEY,
    repeat_1_done  BOOLEAN        NOT NULL,
    repeat_2_done  BOOLEAN        NOT NULL,
    repeat_3_done  BOOLEAN        NOT NULL,
    repeat_4_done  BOOLEAN        NOT NULL,
    repeat_5_done  BOOLEAN        NOT NULL,
    repeat_6_done  BOOLEAN        NOT NULL,
    repeat_7_done  BOOLEAN        NOT NULL,
    repeat_8_done  BOOLEAN        NOT NULL
);

CREATE TABLE question (
    id             BIGSERIAL      NOT NULL   PRIMARY KEY,
    person_id      INTEGER        NOT NULL   REFERENCES person (id)                    DEFAULT 1,
    title          VARCHAR(150)   NOT NULL   DEFAULT '',  
    text           VARCHAR(500)   NOT NULL   DEFAULT '', 
    topic          VARCHAR(150)   NOT NULL   DEFAULT '',  
    repeat_1       TIMESTAMP      NOT NULL   DEFAULT NOW(),
    repeat_2       TIMESTAMP      NOT NULL   DEFAULT NOW() + INTERVAL '17.5 MINUTES',  
    repeat_3       TIMESTAMP      NOT NULL   DEFAULT NOW() + INTERVAL '7 HOURS',
    repeat_4       TIMESTAMP      NOT NULL   DEFAULT NOW() + INTERVAL '1 DAY',
    repeat_5       TIMESTAMP      NOT NULL   DEFAULT NOW() + INTERVAL '3 DAYS',
    repeat_6       TIMESTAMP      NOT NULL   DEFAULT NOW() + INTERVAL '7 DAYS',
    repeat_7       TIMESTAMP      NOT NULL   DEFAULT NOW() + INTERVAL '17.5 DAYS',
    repeat_8       TIMESTAMP      NOT NULL   DEFAULT NOW() + INTERVAL '2.5 MONTHS',
    repeat_status  INTEGER        NOT NULL   REFERENCES repeat_status (id)             DEFAULT 0
);

INSERT INTO repeat_status (id, repeat_1_done, repeat_2_done, repeat_3_done, repeat_4_done, repeat_5_done, repeat_6_done, repeat_7_done, repeat_8_done) VALUES (0, false, false, false, false, false, false, false, false);
INSERT INTO repeat_status (id, repeat_1_done, repeat_2_done, repeat_3_done, repeat_4_done, repeat_5_done, repeat_6_done, repeat_7_done, repeat_8_done) VALUES (1, true, false, false, false, false, false, false, false);
INSERT INTO repeat_status (id, repeat_1_done, repeat_2_done, repeat_3_done, repeat_4_done, repeat_5_done, repeat_6_done, repeat_7_done, repeat_8_done) VALUES (2, true, true, false, false, false, false, false, false);
INSERT INTO repeat_status (id, repeat_1_done, repeat_2_done, repeat_3_done, repeat_4_done, repeat_5_done, repeat_6_done, repeat_7_done, repeat_8_done) VALUES (3, true, true, true, false, false, false, false, false);
INSERT INTO repeat_status (id, repeat_1_done, repeat_2_done, repeat_3_done, repeat_4_done, repeat_5_done, repeat_6_done, repeat_7_done, repeat_8_done) VALUES (4, true, true, true, true, false, false, false, false);
INSERT INTO repeat_status (id, repeat_1_done, repeat_2_done, repeat_3_done, repeat_4_done, repeat_5_done, repeat_6_done, repeat_7_done, repeat_8_done) VALUES (5, true, true, true, true, true, false, false, false);
INSERT INTO repeat_status (id, repeat_1_done, repeat_2_done, repeat_3_done, repeat_4_done, repeat_5_done, repeat_6_done, repeat_7_done, repeat_8_done) VALUES (6, true, true, true, true, true, true, false, false);
INSERT INTO repeat_status (id, repeat_1_done, repeat_2_done, repeat_3_done, repeat_4_done, repeat_5_done, repeat_6_done, repeat_7_done, repeat_8_done) VALUES (7, true, true, true, true, true, true, true, false);
INSERT INTO repeat_status (id, repeat_1_done, repeat_2_done, repeat_3_done, repeat_4_done, repeat_5_done, repeat_6_done, repeat_7_done, repeat_8_done) VALUES (8, true, true, true, true, true, true, true, true);

INSERT INTO person (password, email) VALUES ('some_password', 'some_email');

-- DROP TABLE question;
-- DROP TABLE repeat_status;
-- DROP TABLE person;