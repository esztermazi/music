import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export function Pagination({
  page,
  total,
  pageSize,
}: {
  page: number;
  total: number;
  pageSize: number;
}) {
  const totalPages = Math.ceil(total / pageSize);

  return (
    <div className="w-full flex justify-center items-center gap-4 py-4">
      <Link
        href={`?page=${page - 1}`}
        className={`px-2 py-1 ${
          page === 1 && "pointer-events-none opacity-40"
        }`}
      >
        <ChevronLeft />
      </Link>
      <span className="text-sm text-muted-foreground">
        Page {page} of {totalPages}
      </span>
      <Link
        href={`?page=${page + 1}`}
        className={`px-2 py-1 ${
          page === totalPages && "pointer-events-none opacity-40"
        }`}
      >
        <ChevronRight />
      </Link>
    </div>
  );
}
