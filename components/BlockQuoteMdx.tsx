import React from "react";

export default function BlockQuoteMdx({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <blockquote className="border-l-8 border-teal-500 bg-teal-50 p-4 italic text-gray-700 my-10">
      {children}
    </blockquote>
  );
}
