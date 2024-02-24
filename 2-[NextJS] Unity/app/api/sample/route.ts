import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/prisma/client";

export async function POST(request: NextRequest, response: NextResponse) {
  return NextResponse.json(
    {
      note: "has you migrate the database yet?",
    },
    {
      status: 400,
    }
  );
}
