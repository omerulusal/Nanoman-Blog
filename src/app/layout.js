import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Nunito_Sans } from 'next/font/google'
import Footer from '@/components/footer/Footer'

const Nunito = Nunito_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Nunito.className}>
        <div className='container'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
