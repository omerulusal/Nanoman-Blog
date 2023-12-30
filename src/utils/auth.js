import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
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

/*

!!! NOT: NextAuth kütüphanesini kullanarak kimlik doğrulama işlemleri için Google ve GitHub kullanılıyor.

!!! NOT: clientId: Google veya Github API tarafından sağlanan ve kimlik doğrulama servisine erişim sağlayan bir istemci kimliği

!!! NOT: clientSecret: Google veya Github API tarafından sağlanan ve istemci kimliği ile birlikte kullanılan gizli bir anahtar.

*/