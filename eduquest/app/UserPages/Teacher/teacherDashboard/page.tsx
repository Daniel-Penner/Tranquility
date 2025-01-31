import React from "react";
import Link from "next/link";
import Logo from "@/app/Components/Logo";
import ClassBox from "@/app/Components/TeacherClassBox"; // Importing ClassBox component
import ClassButton from "@/app/Components/ClassButton";
import BackButton from "@/app/Components/BackButton";
import HomeButton from "@/app/Components/HomeButton";
import { cookies } from 'next/headers';
import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient();

const teacherNames: string[] = Array();
const cookieStore = cookies();
const id = cookieStore.get('id')?.value;

export default async function main(){
  "use server";
  const thisTeacher = await prisma.teacher.findFirstOrThrow({
    where:{
      teacherId: Number(id)
    }
  });
  const courses = await prisma.course.findMany();
  const teacher = await prisma.teacher.findMany();
  // Array of colors for class boxes
 const colors: string[] = Array();
 const links: string[] = Array();
 const labels: string[] = Array();
 courses.forEach(async function (element){
  if(element.teacherId === thisTeacher.teacherId){
  colors.push("bg-" + element.courseColour +"-500");
  links.push("teacherDashboard/" + element.courseId);
  labels.push(element.courseName + " " + element.courseSection);
  teacher.forEach(e => {
    if(e.teacherId === element.teacherId){
      teacherNames.push(e.teacherFirstName + " " + e.teacherLastName);
    }
  });
}
});

// Component to display class boxes
const ClassNames = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
      {colors.map((color, index) => (
        <ClassBox
          key={index}
          params={{
            color: color,
            link: links[index],
            label: labels[index],
            name: teacherNames[index],
          }}
        />
      ))}
    </div>
  );
};
return (
  <main className="bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col">
     <HomeButton
      params={{
        link: "../../../"
      }}
    />
    {/* Header with teacher name */}
    <h1 className="text-3xl lg:text-4xl lg:mx-4 sm:mx-2 p-4 mt-16 mb-16 text-black">
      Professor {thisTeacher.teacherLastName}'s Classes
    </h1>
    
    {/* Display class boxes */}
    <ClassNames />
  </main>
);
}
