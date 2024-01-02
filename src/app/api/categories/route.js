import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const categories = await prisma.category.findMany();
        // Prisma kullanarak, dbdeki category schemasındaki tüm kategorileri alır.
        return new NextResponse(
            JSON.stringify(categories), { status: 200 }
        );
    } catch (error) {
        console.log(error)
        return new NextResponse(
            JSON.stringify({ error: "Something went wrong" }), { status: 500 }
        );
    }
}
//! NextResponse ile Next.jsin server tarafından geriye bir cevap döndürür.