import NextAuth from 'next-auth';
import KeycloakProvider from 'next-auth/providers/keycloak';

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
      KeycloakProvider({
        clientId: "webclient",
        clientSecret: "42643e0e-d7be-44fc-a748-9dc23ce5089f",
        issuer: "http://localhost:8088/auth/realms/Nextjs",
      }),
    ],
  });
  
