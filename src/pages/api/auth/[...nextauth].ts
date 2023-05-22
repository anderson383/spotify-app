import { AuthOptions } from 'next-auth';
import getConfig from 'next/config';
import NextAuth from 'next-auth/next';
import SpotifyProvider from 'next-auth/providers/spotify';
const { publicRuntimeConfig } = getConfig();

export const authOptions:AuthOptions = {

  callbacks: {
    async jwt({
      token, account
    }) {
      if (account) {
        token.accessToken = account.access_token;
      }

      return token;
    },
    async session({
      session, token
    }) {
      return {
        ...session,
        accessToken: token.accessToken
      };
    }
  },
  pages: {signIn: '/auth/signin'},
  providers: [
    SpotifyProvider({
      clientId: publicRuntimeConfig.CLIENT_ID,
      clientSecret: publicRuntimeConfig.CLIENTE_SECRET
    })
  ],
  session: {maxAge: 1800}
};

export default NextAuth(authOptions);

