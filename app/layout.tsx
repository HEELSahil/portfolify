import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import './globals.css'

export const metadata = {
  title: 'Portfolify',
  description: 'Show off and browse through remarkable developer portfolios',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        </body>
    </html>
  )
}
