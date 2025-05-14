import React from "react";
import Link from "next/link";

export default function LinkMdx({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-blue-500 hover:text-blue-700 underline my-4"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
}
