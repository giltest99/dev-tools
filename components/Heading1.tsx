import React from "react";

export default function Heading1({ text }: { text: string }) {
  return (
    <>
      <h1 className="text-2xl md:text-3xl lg:text-4xl m-2">{text}</h1>
    </>
  );
}
