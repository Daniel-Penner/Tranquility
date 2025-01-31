import React, { Component } from "react";
import Link from "next/link";
import Logo from "@/app/Components/Logo";
import ClassBox from "@/app/Components/AdminClassBox";
import ClassButton from "@/app/Components/ClassButton";
import BackButton from "@/app/Components/BackButton";
import HomeButton from "@/app/Components/HomeButton";

import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient();

const teacherNames: string[] = Array();

export default async function main(){
  "use server";
  const courses = await prisma.course.findMany();
  const teacher = await prisma.teacher.findMany();
  // Array of colors for class boxes
 const colors: string[] = Array();
 const links: string[] = Array();
 const registerLinks: string[] = Array();
 const editLinks: string[] = Array();
 const labels: string[] = Array();
 courses.forEach(async function (element){
  colors.push("bg-" + element.courseColour +"-500");
  links.push("adminDashboard/" + element.courseId);
  registerLinks.push("adminDashboard/" + element.courseId + "/register");
  editLinks.push("adminDashboard/" + element.courseId + "/edit");
  labels.push(element.courseName + " " + element.courseSection);
  teacher.forEach(e => {
    if(e.teacherId === element.teacherId){
      teacherNames.push(e.teacherFirstName + " " + e.teacherLastName);
    }
  });
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
            teacher: teacherNames[index],
            editLink: editLinks[index],
            registerLink: registerLinks[index]
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
    {/* Header with admin name */}
    <h1 className="text-3xl lg:text-4xl lg:mx-4 sm:mx-2 p-4 mt-16 mb-16 text-black">
      {/*adminName*/} Classes
    </h1>
    <div className="absolute top-4 right-16">
        <ClassButton
          params={{
            link: "./CreateClass",
            label: "Create a Class"
          }}
        />
        </div>
    {/* Display class boxes */}
    <ClassNames />
  </main>
);
}