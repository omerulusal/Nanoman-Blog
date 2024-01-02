import prisma from "@/utils/connect";
import { NextResponse } from "next/server";


// GET ALL COMMENTS
export const GET = async (req) => {
    const { searchParams } = new URL(req.url)
    // Gelen HTTP GET isteğinin URL'sinden parametreleri alır
    const postSlug = searchParams.get('postSlug')
    try {
        const comments = await prisma.comment.findMany({
            // Prisma kullanarak, belirtilen postSlug'a ait yorumları alır
            where: {
                ...(postSlug && { postSlug })
            },
            include: { user: true },
        })
        return new NextResponse(JSON.stringify(comments, { status: 200 }));
    } catch (error) {
        console.log(error)
        return new NextResponse(
            JSON.stringify({ error: "Something went wrong" }), { status: 500 }
        );
    }
}

// CREATE A COMMENT
export const POST = async (req) => {
    const session = await getAuthSession()
    // Kullanıcının oturum durumunu kontrol eder
    if (!session) {
        return new NextResponse(
            JSON.stringify({ error: "Not Authorized" }), { status: 401 }
        );
    }
    try {
        const body = await req.json();
        // HTTP POST isteğinin gövdesinden veriyi alıp body degiskenine atanır
        const comment = await prisma.comment.create({
            // Prisma kullanarak, yeni bir yorum oluşturur
            data: { ...body, userEmail: session.user.email },
        })
        return new NextResponse(JSON.stringify(comment, { status: 201 }));
    } catch (error) {
        return new NextResponse(
            JSON.stringify({ error: "Not Authorized" }), { status: 500 }
        );
    }
}