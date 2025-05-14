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
      <h1 className="text-2xl font-bold mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl font-bold mb-2">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-semibold mb-1">{children}</h3>
    ),
    p: ({ children }) => <p className="text-base mb-2">{children}</p>,
    pre: ({ children }) => (
      <pre className="bg-gray-100 p-4 rounded-md shadow-md my-4">
        {children}
      </pre>
    ),
    code: ({ children }) => <code className="p-1 rounded-md">{children}</code>,
    img: ({ src, alt }) => <Image src={src} alt={alt} />,
    a: ({ children, href }) => (
      <a
        href={href}
        className="text-blue-500 hover:text-blue-700 underline my-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    ...components,
  };
}
