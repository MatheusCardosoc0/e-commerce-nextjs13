import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentailsProvider from 'next-auth/providers/credentials'
import prisma from '@/lib/prismadb'
import bcrypt from 'bcryptjs'

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/'
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentailsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error('Invalid Credentials')
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        })

        if (!user) {
          throw new Error('Invalid Credentials')
        }

        const verifyPassword = await bcrypt.compare(
          credentials.password,
          user.hashPassword
        )

        if (!verifyPassword) {
          throw new Error('Invalid Password')
        }

        return user
      }
    })
  ]
}
export default NextAuth(authOptions)
