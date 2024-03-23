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
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
                    {
                        method: "POST",
                        body: JSON.stringify({
                            userName: credentials?.username,
                            password: credentials?.password,
                        }),
                        headers: { "Content-Type": "application/json" },
                    }
                );
                //console.log(res, "res")
                const user = await res.json();
                //console.log(user, "user");

                if (user.error) throw user;
                return user;
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


