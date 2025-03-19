import { Inter } from 'next/font/google';
import type React from 'react';
import './globals.css';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ja'>
			<body className={`${inter.className} antialiased`}>
				<Header />

				<main className='p-3'>{children}</main>
			</body>
		</html>
	);
}
