import { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import SpotifyProvider from 'next-auth/providers/spotify';

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
      clientId: '07cc7aef36ae4f4a9415d3278cf7ffcd',
      clientSecret: 'be7e8a49ff884794aca73947f0bc07bb'
    })
  ],
  session: {maxAge: 1800}
};

export default NextAuth(authOptions);

