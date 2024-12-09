import { Hero } from "@/components/layout/Hero";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const session = await getUser();

  if (session?.id) {
    return redirect("/dashboard");
  }

  return (
    <div className="mx-auto mb-24 max-w-7xl px-4 sm:px-6 lg:px-8">
      <Hero />
    </div>
  );
}
