import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const { searchParams } = new URL(req.url);
    // Gelen HTTP GET isteğinin URL'sinden parametreleri alır
    const page = searchParams.get('page');
    const cat = searchParams.get('cat');

    const POST_PER_PAGE = 2;
    // Sayfa başına gösterilecek blog yazısı sayısı

    const query = {
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (page - 1),
        where: {
            ...(cat && { catSlug: cat })
        }
    };


    try {
        // Prisma $transaction ile iki ayrı sorguyu birleştirip çalıştırır
        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany(query), // Belirtilen kriterlere göre blog yazılarını getirir
            prisma.post.count({ where: query.where })// Belirtilen kriterlere göre toplam blog yazısı sayısını getirir
        ])
        return new NextResponse(
            JSON.stringify({ posts, count }), { status: 200 }
        );
    } catch (error) {
        console.log(error)
        return new NextResponse(
            JSON.stringify({ error: "Something went wrong" }), { status: 500 }
        );
    }
}



// CREATE A POST
export const POST = async (req) => {

    const session = await getAuthSession()
    // kullanıcın oturum durumunu kontrol eder
    if (!session) {
        return new NextResponse(
            JSON.stringify({ error: "Not Authorized" }), { status: 401 }
        );
    }
    try {
        const body = await req.json();
        // HTTP POST isteğinin gövdesinden veriyi alıp body degiskenine atanır
        const post = await prisma.post.create({
            data: { ...body, userEmail: session.user.email },
            // Prisma kullanarak, yeni bir post oluşturur
        })
        return new NextResponse(JSON.stringify(post, { status: 201 }));
    } catch (error) {
        return new NextResponse(
            JSON.stringify({ error: "Not Authorized" }), { status: 500 }
        );
    }
}