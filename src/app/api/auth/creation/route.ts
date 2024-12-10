import { env } from "@/env/server";
import prisma from "@/lib/utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user === null || !user.id) {
    throw new Error("User not found");
  }

  let dbUser = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
  });

  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        id: user.id,
        firstName: user.given_name ?? "",
        lastName: user.family_name ?? "",
        email: user.email ?? "",
        profileImage: user.picture ?? `https://avatar.verce.sh/${user.given_name}`,
      },
    });
  }

  return NextResponse.redirect(
    env.NODE_ENV === "production"
      ? "https://blogmarshal.vercel.app/"
      : "http://localhost:3000/dashboard",
  );
}
