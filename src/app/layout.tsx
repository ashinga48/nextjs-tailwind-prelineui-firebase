import { Inter } from 'next/font/google';
import './globals.css';

import PrelineScript from "./components/PrelineScript";
// Load the Inter font with 'latin' subset
const inter = Inter( { subsets: [ 'latin' ] } );

// Metadata for the application
export const metadata = {
  title: 'SNSC',
  description: '',
};

// Root layout component for the application
export default function RootLayout( { children }: { children: React.ReactNode } ): JSX.Element {
  return (
    <html lang="en">
      {/*
        The <head /> component will contain the components returned by the nearest parent
        head.js. It can be used to define the document head for SEO, metadata, and other purposes.
        Learn more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <body>
        {/* Wrap the children with the AuthContextProvider to provide authentication context */}
        {children}
        <script src="./node_modules/preline/dist/preline.js"></script>
      </body>
      <PrelineScript />
    </html>
  );
}
