import NextAuth from 'next-auth';
import KeycloakProvider from 'next-auth/providers/keycloak';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    KeycloakProvider({
      clientId: 'webclient',
      clientSecret: 'a0b789f8-370a-4780-b9cd-6d659edf3c03',
      issuer: 'http://localhost:8088/auth/realms/Nextjs',
    }),
  ],
});
