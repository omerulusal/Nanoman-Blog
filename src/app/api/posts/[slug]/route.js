import prisma from "@/utils/connect";
import { NextResponse } from "next/server";


// GET SINGLE POST
export const GET = async ({ params }) => {

    const { slug } = params;

    try {
        const post = await prisma.post.findUnique({
            where: { slug },
            include: { user: true },
        })
        return new NextResponse(JSON.stringify(post, { status: 200 }));
    } catch (error) {
        console.log(error)
        return new NextResponse(
            JSON.stringify({ error: "Something went wrong" }), { status: 500 }
        );
    }
}