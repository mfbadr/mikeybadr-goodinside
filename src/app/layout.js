import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Good Inside Cards',
  description: 'A collection of cards for Good Inside',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-white` }>
        <header className='border-gray-500 border-b-2 mb-2'>
          <h1 className="text-2xl font-bold text-center py-4">Welcome to Good Inside!</h1>
        </header>
        <div className="container mx-auto px-2 sm:px-4">
          {children}
        </div> 
      
      </body>
    </html>
  )
}
