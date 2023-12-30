import { authOptions } from "@/utils/auth"
import NextAuth from "next-auth"

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
//!handler fonksiyonu GET ve POST HTTP metodları için exportlanır. 

/*

!api icerisinde auth/[...nextauth] dinamik adresi rastgele olusturdugum bir yapı degil
https://next-auth.js.org/getting-started/example
!Kullanıcının bilgilerini tutmak istedigimiz yerlerde next-auth kullanıyoruz. 
!next-auth ile birlikte api ile birlikte kullanıcı bilgilerinin tutulması gerekiyor. 
!Bu bilgileri veritabanına kaydedecegiz.

*/