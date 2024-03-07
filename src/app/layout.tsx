import Navbar from '@/components/navbar';
import type { Metadata } from 'next';
import { ClerkProvider } from "@clerk/nextjs";
import { Montserrat } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";

import './globals.css';
import Head from 'next/head';

const montserrat = Montserrat({
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
    <ClerkProvider>
      <html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
            integrity="sha384-rBSBEzi5F2tqkgU/P4aON3s3BAAwsJ99lFM4l2xqjxg0bPbm5dIOWzW9lERbY"
            crossOrigin="anonymous"
          />
        </Head>
        <body className={montserrat.className}>
          <Navbar />
          <ToastContainer />
          {children}
        </body>

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
          integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
          crossOrigin="anonymous"
        ></script>
        <script
          async
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
          integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
          crossOrigin="anonymous"
        ></script>
      </html>
    </ClerkProvider>
  );
}
