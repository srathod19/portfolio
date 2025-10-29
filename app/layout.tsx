import './globals.css'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export const metadata = {
title: 'Sachin — AI/ML Developer',
description: 'Portfolio of Sachin — AI/ML Developer',
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body>
<div className="min-h-screen flex flex-col">
<Navbar />
<main className="flex-1 container mx-auto px-6 py-12">{children}</main>
<Footer />
</div>
</body>
</html>
)
}