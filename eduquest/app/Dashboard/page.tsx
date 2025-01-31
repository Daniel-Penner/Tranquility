import React, { Component } from "react";
import Link from "next/link";
import Logo from "@/app/Components/Logo";
import ClassBox from "@/app/Components/ClassBox";
import ClassButton from "@/app/Components/ClassButton";
import BackButton from "@/app/Components/BackButton";
const colors: string[] = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-indigo-500",
  "bg-purple-500",
  "bg-pink-500",
];

interface ClassProps {
  color: string;
  link: string;
  label: string;
}

const ClassNames = () => {
  var links: string[] = [
    "Dashboard/Math100",
    "Dashboard/Chemistry111",
    "Dashboard/Physics112",
    "Dashboard/Biology121",
    "Dashboard/Comp-Sci122",
    "Dashboard/English112",
  ];
  var labels: string[] = [
    "Math 100",
    "Chemistry 111",
    "Physics 112",
    "Biology 121",
    "Comp-Sci 122",
    "English 112",
  ];
  var grades: string[] = [
    "89%",
    "75%",
    "98%",
    "67%",
    "84%",
    "78%"
  ];
  var teachers: string[] = [
      "Dr. Meredith Stone",
      "Dr. Alexander Patel", 
      "Dr. Eleanor Hayes",
      "Dr. Benjamin Carter", 
      "Dr. Victoria Liu", 
      "Dr. Jim Thompson"
    ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
      {colors.map((color, index) => (
        <ClassBox
          key={index}
          params={{
            color: color,
            link: links[index],
            label: labels[index],
            grade: grades[index],
            teacher: teachers[index]
          }}
        />
      ))}
    </div>
  );
};

export default function Dashboard() {
  return (
    <main className="bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col">
      <BackButton
      params={{
        link: "../"
      }}
    />
      <h1 className="text-3xl lg:text-4xl lg:mx-4 sm:mx-2 p-4 mt-16 mb-16">
        Dashboard
      </h1>
    
      {/*<ClassNames /> Commented out to simplify dashboard*/}
      <Link href = "Dashboard/teacherDashboard">
      
            <button className="bg-blue-500 text-white px-20 py-10 rounded border-2 border-blue-600 hover:bg-blue-600 hover:border-blue-700 mt-4" style={{borderWidth: "4px"}}>Teacher</button>
            
          </Link>
          <Link href = "Dashboard/adminDashboard">
      
            <button className="bg-red-500 text-white px-20 py-10 rounded border-2 border-red-600 hover:bg-red-600 hover:border-red-700 mt-4" style={{borderWidth: "4px"}}>Admin</button>
            
          </Link>
          <Link href = "Dashboard/studentDashboard">
      
            <button className="bg-green-500 text-white px-20 py-10 rounded border-2 border-green-600 hover:bg-green-600 hover:border-green-700 mt-4" style={{borderWidth: "4px"}}>Student</button>
            
          </Link>
    </main>
  );
}
