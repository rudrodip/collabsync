import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { env } from "@env.mjs"
import axios from 'axios'

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
          scope: "openid email profile https://www.googleapis.com/auth/youtube",
        }
      }
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // const authorizationCode = account?.credentials;
      const reqBody = {
        id: user.id,
        email: user.email,
        access_token: account?.access_token,
        refresh_token: account?.refresh_token,
        expires_at: account?.expires_at,
        scope: account?.scope,
      }
      try {
        const response = await axios.post('http://localhost:3000/api/user/create', reqBody);
    
        if (response.status === 201 || response.status === 200) {
          return true;
        } else {
          console.error('API request failed:', response.status, response.data);
          return false;
        }
      } catch (error) {
        console.error('Error making API request:', error);
        return false; // Deny the sign-in
      }
    },
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
        session.user.image = token.picture
      }
      return session
    },
  },
}
