import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

const schema= z.object({
    title: z.string().min(1).max(255),
    rating: z.string().min(1).max(5),
    notes: z.string().min(1).max(1000)
});

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation=schema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 })
    
    const newIssue=prisma.movie.create({
data:{title:body, rating:body.rating, notes:body.notes}
    })
    return NextRequest/json(newIssue,{status:201})
}
