import React from "react";
import Link from "next/link";

type Params = {
  params: {
    link: string;
  };
};

export default function ClassButton({ params }: Params) {
  const buttonContainerStyle: React.CSSProperties = {
    position: "absolute",
    top: "12px",
    left: "12px",
  };


  return (
    <div style={buttonContainerStyle}>
      <Link href={`${params?.link}`}>
        <div className="group relative">
          <div className="bg-white text-black px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition duration-300 ease-in-out flex items-center justify-center">
            <span className="text-2xl">Back</span>
          </div>
          
        </div>
      </Link>
    </div>
  );
}
