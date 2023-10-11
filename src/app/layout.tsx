import { Footer, Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'
export const metadata: Metadata = {
  title: 'Abuzar',
  description: `As a frontend developer, I bring a versatile skill set to the table, including expertise in React, Next.js, PHP, and a deep understanding of working with databases like MySQL. I'm well-versed in UI frameworks like Tailwind CSS, Bootstrap, Chakra UI, and Shadcn UI, enabling me to create stunning and user-friendly interfaces. Moreover, I can seamlessly integrate backend services and data using GraphQL and REST APIs, and I have experience with Stripe for payment processing and Sanity for content management. My proficiency in these technologies allows me to craft efficient and dynamic web applications that cater to diverse project requirements.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    
      <body className='bg-white text-black dark:bg-black dark:text-white'>
     
        <Navbar/>
        {children}
        <Footer/>
        <Script id='theme-swither' strategy='beforeInteractive'>
 {` if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }`}
        </Script>
        </body>
    </html>
  )
}
