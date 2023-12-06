import { prisma } from "@/config/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    await prisma.user.create({
      data: {
        name: body?.name,
        email: body?.email,
        age: body.age,
        sallary: body.sallary,
      },
    });
    return NextResponse.json({ message: "Successfully Created" });
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}
