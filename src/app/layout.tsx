import ClientOnly from '@/components/ClientOnly'
import './globals.css'
import LoginModal from '@/components/Modals/LoginModal'
import Navbar from '@/templates/Navbar'
import RegisterModal from '@/components/Modals/RegisterModal'
import getCurrentUser from '@/functions/getCurrentUser'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const currentUser = await getCurrentUser()

  return (
    <html lang="en">
      <body>
        <ClientOnly>
          <LoginModal />
          <RegisterModal />
          <Navbar
            currentUser={currentUser}
          />
        </ClientOnly>
        <div className='pb-20 pt-28'>
          {children}
        </div>
      </body>
    </html>
  )
}
