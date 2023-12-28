import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Nunito_Sans } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ThemeContextProvider } from '@/context/ThemeContext'
import ThemeProvider from '@/providers/ThemeProvider'

const Nunito = Nunito_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Nunito.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className='container'>
              <Navbar />
              {children}
              <Footer />
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
