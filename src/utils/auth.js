import { PrismaAdapter } from "@auth/prisma-adapter"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import prisma from "./connect"
import { getServerSession } from "next-auth"

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
}

export const getAuthSession = () => getServerSession(authOptions)

/*

!!! NOT: NextAuth kütüphanesini kullanarak kimlik doğrulama işlemleri için Google ve GitHub kullanılıyor.
!!!NOT: DOCS: https://next-auth.js.org/v3/adapters/prisma 

!!! NOT: clientId: Google veya Github API tarafından sağlanan ve kimlik doğrulama servisine erişim sağlayan bir istemci kimliği

!!! NOT: clientSecret: Google veya Github API tarafından sağlanan ve istemci kimliği ile birlikte kullanılan gizli bir anahtar.

*/