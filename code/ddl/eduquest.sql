CREATE DATABASE IF NOT EXISTS eduquest;

USE eduquest;

DROP TABLE IF EXISTS student;
DROP TABLE IF EXISTS teacher;
DROP TABLE IF EXISTS course;
DROP TABLE IF EXISTS assignment;
DROP TABLE IF EXISTS administrator;
DROP TABLE IF EXISTS enrolled;


CREATE TABLE student(
    studentId           INT NOT NULL AUTO_INCREMENT,
    studentUid          INT,    
    studentFirstName    VARCHAR(40),
    studentLastName     VARCHAR(40),
    studentUsername     VARCHAR(40),
    studentPassword     VARCHAR(40),
    studentEmail        VARCHAR(50),
    overallGrade        DECIMAL(4,2),
    attendence          DECIMAL(4,2),
    leaderboardPosition INT,
    PRIMARY KEY(studentId)
) ENGINE=InnoDB;

CREATE TABLE teacher (
    teacherId           INT NOT NULL AUTO_INCREMENT,
    teacherUid          INT,
    teacherFirstName    VARCHAR(40),
    teacherLastName     VARCHAR(40),
    teacherUsername     VARCHAR(40),
    teacherPassword     VARCHAR(40),
    teacherEmail        VARCHAR(50),
    educationLevel      VARCHAR(20),
    numOfCourses        INT,
    numOfSessions       INT,
    PRIMARY KEY(teacherId)
) ENGINE=InnoDB;

CREATE TABLE administrator(
    adminId             INT NOT NULL AUTO_INCREMENT,
    adminUid            INT,
    adminFirstName      VARCHAR(40),
    adminLastName       VARCHAR(40),
    adminUsername       VARCHAR(40),
    adminPassword       VARCHAR(40),
    adminEmail          VARCHAR(50),
    PRIMARY KEY(adminId)
) ENGINE=InnoDB;

CREATE TABLE course (
    courseId            INT NOT NULL AUTO_INCREMENT,
    courseName          VARCHAR(40),
    courseSection       INT,
    numEnrolled         INT,
    courseAverage       DECIMAL(4,2),
    PRIMARY KEY(courseId)
) ENGINE=InnoDB;

CREATE TABLE assignment(
    assignmentId        INT NOT NULL AUTO_INCREMENT,
    assignmentName      VARCHAR(40),
    startDate           DATETIME,
    dueDate             DATETIME,
    worth               DECIMAL(3,2),
    assignmentType      VARCHAR(40),
    PRIMARY KEY(assignmentId)
) ENGINE=InnoDB;

CREATE TABLE enrolled(
    studentId           INT NOT NULL,
    courseId            INT NOT NULL,
    PRIMARY KEY(studentId, courseId)
) ENGINE=InnoDB;

-- student dummy data being inserted for testing:
INSERT INTO student (studentUid, studentFirstName, studentLastName, studentUsername, studentPassword, studentEmail, overallGrade, attendence, leaderboardPosition) VALUES (1234, 'John', 'Doe', 'johndoe123', 'password123', 'johndoe@example.com', 85.50, 92.00, 2);
INSERT INTO student (studentUid, studentFirstName, studentLastName, studentUsername, studentPassword, studentEmail, overallGrade, attendence, leaderboardPosition) VALUES (5678, 'Jane', 'Smith', 'janesmit456', 'password456', 'janesmith@example.com', 78.28, 87.50, 3);
INSERT INTO student (studentUid, studentFirstName, studentLastName, studentUsername, studentPassword, studentEmail, overallGrade, attendence, leaderboardPosition) VALUES (9876, 'Michael', 'Johnson', 'michaeljohnson789', 'password789', 'michaeljohnson@example.com', 92.75, 95.75, 1);
INSERT INTO student (studentUid, studentFirstName, studentLastName, studentUsername, studentPassword, studentEmail, overallGrade, attendence, leaderboardPosition) VALUES (1111, 'Edward', 'Knight', 'eddwardknight111', 'password111', 'edwardknight@example.com', 68.25, 78.25, 5);
INSERT INTO student (studentUid, studentFirstName, studentLastName, studentUsername, studentPassword, studentEmail, overallGrade, attendence, leaderboardPosition) VALUES (3333, 'Robert', 'Adams', 'robertadams333', 'password333', 'robertadams@example.com', 75.00, 85.00, 4);
INSERT INTO student (studentUid, studentFirstName, studentLastName, studentUsername, studentPassword, studentEmail, overallGrade, attendence, leaderboardPosition) VALUES (5555, 'Trisha', 'Gao', 'trishagao555', 'password555', 'trishagao@example.com', 43.50, 48.00, 6);

-- teacher dummy data being inserted for testing:
INSERT INTO teacher (teacherUid, teacherFirstName, teacherLastName, teacherUsername, teacherPassword, teacherEmail, educationLevel, numOfCourses, numOfSessions) VALUES (10001, 'Alice', 'Johnson', 'alicej123', 'pass123', 'alicej@example.com', 'Bachelor', 3, 6);
INSERT INTO teacher (teacherUId, teacherFirstName, teacherLastName, teacherUsername, teacherPassword, teacherEmail, educationLevel, numOfCourses, numOfSessions) VALUES (10002, 'Bob', 'Smith', 'bobsmith456', 'pass456', 'bobsmith@example.com', 'Master', 5, 8);
INSERT INTO teacher (teacherUId, teacherFirstName, teacherLastName, teacherUsername, teacherPassword, teacherEmail, educationLevel, numOfCourses, numOfSessions) VALUES (10003, 'Charlie', 'Williams', 'charliew789', 'pass789', 'charlierw@example.com', 'PhD', 4, 10);

-- -- admin dummy data being inserted for testing:
INSERT INTO administrator (adminUid, adminFirstName, adminLastName, adminUserName, adminPassword, adminEmail) VALUES (101, 'Emily', 'Taylor', 'admin1', 'adminpass1', 'admin1@example.com');
INSERT INTO administrator (adminUid, adminFirstName, adminLastName, adminUsername, adminPassword, adminEmail) VALUES (202, 'Mathew', 'Clark', 'admin2', 'adminpass2', 'admin2@example.com');
INSERT INTO administrator (adminUid, adminFirstName, adminLastName, adminUsername, adminPassword, adminEmail) VALUES (303, 'Olivia', 'Wilson', 'admin3', 'adminpass3', 'admin3@example.com');

-- -- course dummy data being inserted for testing:
INSERT INTO course (courseName, courseSection, numEnrolled, courseAverage) VALUES ('Mathematics', 101, 65, 89.50);
INSERT INTO course (courseName, courseSection, numEnrolled, courseAverage) VALUES ('Science', 202, 78, 92.75);
INSERT INTO course (courseName, courseSection, numEnrolled, courseAverage) VALUES ('History', 303, 54, 75.25);

-- -- assignment dummy data being inserted for testing: 
INSERT INTO assignment (assignmentName, startDate, dueDate, worth, assignmentType) VALUES ('Quiz 1', '2024-03-20 08:00:00', '2024-03-21 23:59:59', '5.00', 'Quiz');
INSERT INTO assignment (assignmentName, startDate, dueDate, worth, assignmentType) VALUES ('Assignment 1', '2024-03-22 08:00:00', '2024-03-23 23:59:59', '2.50', 'File Upload');
INSERT INTO assignment (assignmentName, startDate, dueDate, worth, assignmentType) VALUES ('QUiz 2', '2024-03-24 08:00:00', '2024-03-25 23:59:59', '5.00', 'Quiz');

INSERT INTO enrolled (studentId, courseId) VALUES (1,1);
INSERT INTO enrolled (studentId, courseId) VALUES (1,2);
INSERT INTO enrolled (studentId, courseId) VALUES (2,1);
INSERT INTO enrolled (studentId, courseId) VALUES (2,3);
INSERT INTO enrolled (studentId, courseId) VALUES (3,1);
INSERT INTO enrolled (studentId, courseId) VALUES (3,2);
INSERT INTO enrolled (studentId, courseId) VALUES (3,3);
INSERT INTO enrolled (studentId, courseId) VALUES (4,2);
INSERT INTO enrolled (studentId, courseId) VALUES (4,3);
INSERT INTO enrolled (studentId, courseId) VALUES (5,1);
INSERT INTO enrolled (studentId, courseId) VALUES (5,2);
INSERT INTO enrolled (studentId, courseId) VALUES (5,3);
INSERT INTO enrolled (studentId, courseId) VALUES (6,3);