'use server'
import { redirect } from 'next/navigation'
import React from 'react';
import BackButton from "@/app/Components/BackButton";
import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient();
const checkParam = (quizId: string): boolean => {
  const regex = /^[a-zA-Z0-9]+$/;
  return regex.test(quizId);
}
// Question object to hold all questions, answers, correct answers, and points of each question
export interface Question {
  question: string;
  answers: string[];
  correctAns: number;
  points: number;
}
/* Quiz object is an array of question objects while also containing the quizId, however, the quizId can be accessed without the object 
as it is a parameter passed by the dynamic route of the previous page*/
export interface Quiz {
  quizId: string;
  questions: Question[];
}
// Set quiz parameters received from previous page
export default async function Quiz({ params }: {
  params: { quizId: string }
}) {
  if (!(checkParam(params.quizId))) {
    redirect('../../../../Error');
}

  const thisQuiz = await prisma.quiz.findFirstOrThrow({
    where: {
      quizId: Number(params.quizId)
    }
  })
    const quizName = thisQuiz.quizName;

  const quizQuestions = await prisma.question.findMany({
    where: {
        quizId: Number(params.quizId)
    }
});
  const questionArray: Question[] = Array();
  quizQuestions.forEach(element => {
    const temp: Question = {
      question: element.questionContent+"",
      answers: [element.firstAnswer+"",element.secondAnswer+"",element.thirdAnswer+"",element.fourthAnswer+""],
      correctAns: Number(element.correctAnswer),
      points: 10
    }
    questionArray.push(temp);
  });

  // Example quiz object creation. follow this syntax to add questions into a quiz object
  const quiz: Quiz = {
    quizId: params.quizId,
    questions: questionArray
  };

  // Total score calculation, based on correct quiz answers
  const calculateScore = (answers: number[]): number => {
    let score = 0;
    quiz.questions.forEach((question, index) => {
      if (answers[index] === question.correctAns) {
        score += question.points;
      }
    });
    return score;
  };

  // |On form submission (submit button), run the score calculater and display the score to the user|

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(event.currentTarget); // Form data object created from quiz form 
    const answers: number[] = []; // Array to store index of user answers

    //|Loop Through All Questions|, check whether the answer is right, if right 
    quiz.questions.forEach((_, index) => {
      const selectedAnswer = formData.get(`q${index + 1}`); // Get value of selected answer for current question from form data object (quiz form)
      if (typeof selectedAnswer === 'string') {
        answers.push(parseInt(selectedAnswer));
      } else {
        answers.push(-1);
      }
    });
    
    const totalScore = calculateScore(answers);
    // |Displays Total Score| to user based on number of questions (this logic assumes each question is worth the same amount of points)
    alert(`Your score: ${totalScore} out of ${quiz.questions.length * 10}`);
  };

  return (
    <main className="px-4 bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col">
      <BackButton
      params={{
        link: "../"
      }}
    />
      <div className="bg-white rounded-lg p-6 md:w-[75rem] w-full mt-8">
        <h1 className="text-5xl font-bold mb-4 text-black text-center">{quizName}</h1>
        <br></br>
        <form>
          {/* Loop through each question to display each question to the user */}
          {quiz.questions.map((question, index) => (
            <div key={index} className="mb-6">
              <p className="text-2xl font-medium mb-2 text-black">{`Question ${index + 1}: ${question.question}`}</p>
              {/* Loop through each answer to display the radio button (multiple choice) answers to the user */}
              {question.answers.map((answer, answerIndex) => (
                <div key={answerIndex} className="flex items-center mb-2">
                  <input 
                    type="radio" 
                    id={`q${index + 1}_${answerIndex}`} 
                    name={`q${index + 1}`} 
                    value={answerIndex.toString()} 
                  />
                  <label htmlFor={`q${index + 1}_${answerIndex}`} className="ml-2 text-black sm:text-xl lg:text-2xl">{answer}</label>
                </div>
              ))}
            </div>
          ))}
          <button type="submit" className="bg-amber-500 text-white py-2 px-4 rounded-md hover:bg-amber-600">Submit</button>
        </form>
      </div>
    </main>
  );
}