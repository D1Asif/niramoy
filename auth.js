import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import jwt from 'jsonwebtoken';

export const { handlers, signIn, signOut, auth } = NextAuth({
    session: {
        strategy: "jwt",
        maxAge: 48 * 60 * 60
    },
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {}
            },
            authorize: async (credentials) => {
                if (!credentials) return null;

                try {
                    const formData = new URLSearchParams();
                    formData.append('username', credentials?.username);
                    formData.append('password', credentials?.password);

                    const res1 = await fetch(`${process.env.API_BASE_URL}/token`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        body: formData
                    });
                    const data = await res1.json();

                    const decodedToken = jwt.verify(data.access_token, "niramy12345", { algorithms: ["HS256"] });

                    const res2 = await fetch(`${process.env.API_BASE_URL}/users/${decodedToken.id}`);
                    const userData = await res2.json();

                    const user = {
                        ...userData,
                        authToken: data.access_token
                    }

                    return user;

                } catch (error) {
                    console.error('Token verification failed:', error);
                    throw new Error("Verification error")
                }

                // if (user) {
                //     const isMatch = await bcrypt.compare(credentials?.password, user.password);
                //     if (isMatch) {
                //         return user;
                //     } else {
                //         throw new Error("Email and password do not match!")
                //     }
                // } else {
                //     throw new Error("User doesn't exist.")
                // }
            }
        })
    ],
    callbacks: {
        async session({ session, token }) {
            session.user = token.user;
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.user = user;
            }
            return token;
        },
    },
})