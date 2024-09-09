import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma  from "@/db";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from 'bcrypt'

export const authOptions: any = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials: any) {
        const user = await prisma.user.findUniqueOrThrow({
          where: {
            email: credentials.email,
          },
        });

        if(!user || !user?.hashedPassword){
          throw new Error('No user Found')
        }

        const checkPassword = await bcrypt.compare(credentials.password, user.hashedPassword)

        if(!checkPassword){
          throw new Error('Incorrect Password')
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
