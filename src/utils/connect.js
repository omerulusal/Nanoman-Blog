import { PrismaClient } from '@prisma/client'
let prisma
if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient()
    // NODE_ENV 'production' ise üretim ortamında çalışıyordur ve bu durumda yeni bir PrismaClient örneği (prisma) oluşturulur.
} else {
    if (!global.prisma) {
        global.prisma = new PrismaClient()
        // Eğer uygulama geliştirme ortamındaysa ve global.prisma daha önce tanımlanmamışsa
        // Yeni bir PrismaClient örneği oluşturuyoruz
    }
    prisma = global.prisma
}

export default prisma

/*

prisma değişkeni, PrismaClient örneğini temsil eder ve prisma dışa aktarılır. 
Bu sayede, uygulama içinde Prisma ORM ile veritabanına erişim sağlanabilir. 
Geliştirme ortamında global bir prisma örneği paylaşılırken, üretim ortamında her bir modül kendi PrismaClient örneğini oluşturur.

*/