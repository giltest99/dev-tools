import type { MDXComponents } from "mdx/types";
import Image from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    main: ({ children }) => (
      <main className="prose prose-invert max-w-[1024px] mx-auto">
        {children}
      </main>
    ),
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mb-2">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold mb-1">{children}</h3>
    ),
    p: ({ children }) => <p className="text-base mb-2">{children}</p>,
    pre: ({ children }) => (
      <pre className="bg-gray-100 p-4 rounded-md shadow-md my-4">
        {children}
      </pre>
    ),
    img: ({ src = "", alt = "" }) => (
      <Image
        src={src}
        alt={alt}
        width={800}
        height={600}
        className="w-full h-auto mx-auto my-4 rounded-md shadow-md"
      />
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline my-6 inline-block"
      >
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-8 border-purple-500 bg-purple-50 p-4 italic my-4 rounded-r-lg shadow-md">
        {children}
      </blockquote>
    ),

    ...components,
  };
}
