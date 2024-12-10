import { Button } from "@/components/ui/button";
import { FileIcon, PlusCircle } from "lucide-react";
import Link from "next/link";

interface iAppProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

export function EmptyState({ buttonText, description, href, title }: iAppProps) {
  return (
    <div className="fade-in-50 flex animate-in flex-col items-center justify-center rounded-md border border-dashed p-8 text-center">
      <div className="flex size-20 items-center justify-center rounded-full bg-primary/10">
        <FileIcon className="size-10 text-primary" />
      </div>
      <h2 className="mt-6 font-semibold text-xl">{title}</h2>
      <p className="mx-auto mt-2 mb-8 max-w-sm text-center text-muted-foreground text-sm leading-tight">
        {description}
      </p>

      <Button asChild>
        {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
        <Link href={href as any}>
          <PlusCircle className="mr-2 size-4" /> {buttonText}
        </Link>
      </Button>
    </div>
  );
}
