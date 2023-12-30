import { authOptions } from "@/utils/auth"
import NextAuth from "next-auth"

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

/*
Kullanıcının bilgilerini tutmak istedigimiz yerlerde next-auth kullanıyoruz. next-auth ile birlikte api ile birlikte kullanıcı bilgilerinin tutulması gerekiyor. Bu bilgileri veritabanına kaydedecegiz.
*/