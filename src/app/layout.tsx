import ClientOnly from '@/components/ClientOnly'
import './globals.css'
import LoginModal from '@/components/Modals/LoginModal'
import Navbar from '@/templates/Navbar'
import RegisterModal from '@/components/Modals/RegisterModal'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClientOnly>
          <LoginModal />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        <div className='pb-20 pt-28'>
          {children}
        </div>
      </body>
    </html>
  )
}
