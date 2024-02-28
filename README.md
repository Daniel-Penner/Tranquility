# EduQuest
![EduQuest Logo](Assets/logo-1.jpg)

## Set up instructions
In the terminal run the following commands
```
cd eduquest
npm install
```

It should be set up now

## Run instructions 
```
cd eduquest/
npm run dev
```

The site should be accessible on [localhost:3000/](localhost:3000/) 

## High-Level Description
Teachers will be able to create questions and student groups along with viewing student marks/attendance. Students will be able to answer live questions as well as asynchronous assignments and quizzes posted by teachers, communicate with their peers, and submit essay questions via an interactive text box and file upload. 


## Requirements

### User Requirements
1. Students and teachers should be able to create accounts under an email easily  
2. Teachers should be able to create courses/classroom environments 
3. Teachers should be able to create Quizzes and assignments
4. For quizzes, teachers should be able to create correct answers in advance
5. For assignments, teachers should be able to view and manually grade responses
6. Students should be able to join classes via a sign-in code
7. Students should be able to join project/quiz groups with other students in the class
8. Teachers should be able to view/modify student groups
9. Teachers should be able to make unmarked quizzes (just for fun/learning in class, or for practice exams)
10. Teachers should be able to display and customize leaderboards for the “fun/learning” quizzes, to motivate students to pay attention in class and incentivize friendly competition 
11. Teachers should be able to assign rewards in the form of digital badges/items
12. Students should be able to track their marks throughout a class and view statistics relating to them
13. Teachers should be able to track the marks of all students on one panel, or specifically those of an individual student 


### Functional Requirements
1. The system will allow users to create an account and securely login
2. Teachers will be able to create a course/classroom
3. The platform will provide a list of created classes that students can join
4. The system will track student progress in a certain class and their overall grades
5. The written assignment due dates will be tracked by the system
6. The written assignment submission box will be closed once due date has past
7. The system will display upcoming assignments for each course that a student is enrolled in
8. The teacher will be able to start a live classroom where students can join
9. The teacher will be able to ask the students questions live in the class
10. The system will track student attendance and who has joined the live classroom
11. An optional timer can be set for how long the students have to answer each question
12. Student grades will automatically sync after each live class
After each class, students will be able to review the questions and see their grades
13. The system will be able to calculate an overall course grade for each student

### Non-Functional Requirements

**Product Requirements**

1. **Scalability:** EduQuest should be scalable, in other words, it should be able to handle more than the assumed number of teachers/students by a fair margin.
2. **Performance:** The application should perform efficiently and reliably: it should be free of detrimental errors/bugs and should perform with reasonable efficiency.
3. **Accessibility:** EduQuest should implement at the very least barebones accessibility features throughout the application (alt text, captioning, etc.) and should push to try and implement other desired features (dyslexia font conversion, site-alterable font size, dark mode, etc.) 
4. **Usability:** EduQuest should be responsive on all devices (Mobile and PC). Users should be able to use the application across these platforms without issue.

**Organizational Requirements**


1. **Development Requirements:** The development team must be on the same page regarding the development stack, communication methods, and timeline. 
2. **Operational Requirements:** Security procedures in regards to user data must be followed at all times and files uploaded must be kept in a secure database. 
   
**External Requirements**
1. **Legislative Requirements:** Any data collected by EduQuest should not be sold or distributed under any circumstance or in any manner. EduQuest must provide a privacy policy if data collection is to take place and must follow academic integrity policies.


### Nice to have
- Thought for the live question groups should we have to where students in groups can also submit essay questions as groups? (similar to how canvas groups have it where if one person submits then they all submit?) -> could do it internally treating each student group as an entity



## Members
- Mark Lovesey - 32330540
- Ankkit Prakash - 44696284
- Daniel Penner - 54925359
- Nolan Nishikawa - 49988330
- Rhys Smith - 54103684 