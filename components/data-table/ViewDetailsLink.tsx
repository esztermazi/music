import { Eye } from "lucide-react";
import Link from "next/link";

export function ViewDetailsLink({
  basePath,
  id,
}: {
  basePath: string;
  id: string;
}) {
  return (
    <Link href={`${basePath}/${id}`} className="flex gap-2">
      <Eye className="size-4" />
    </Link>
  );
}
