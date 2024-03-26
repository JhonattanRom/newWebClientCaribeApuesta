import axios from "@/app/_lib/axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {

                const res = await axios.post('/auth/login', {
                    userName: credentials?.username,
                    password: credentials?.password,
                });

                const user = await res.data;

                if (user) {
                    return user;
                } else {
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token }: any) {
            session.user = token as any;
            return session;
        },
    },
    pages: {
        signIn: "/",
    },
})

export { handler as GET, handler as POST }


