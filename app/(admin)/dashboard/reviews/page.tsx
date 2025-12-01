"use client";

import DataTable from "@/components/data-table/DataTable";
import { Pagination } from "@/components/data-table/Pagination";
import { TableActions } from "@/components/data-table/TableActions";
import { RatingStars } from "@/components/ui/rating-stars";
import { ReviewDTO } from "@/types/review";
import { User } from "@/types/user";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ViewDetailsLink } from "@/components/data-table/ViewDetailsLink";
import { PAGE_SIZE } from "@/lib/constants";

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState<ReviewDTO[]>([]);
  const [total, setTotal] = useState<number>(0);
  const search = useSearchParams();
  const page = Number(search.get("page") ?? 1);
  const basePath = "/reviews";

  useEffect(() => {
    fetch(`/api${basePath}?start=${(page - 1) * PAGE_SIZE}&limit=${PAGE_SIZE}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews);
        setTotal(data.total);
      });
  }, [page]);

  return (
    <div className="flex flex-col flex-1 min-h-0">
      <div className="flex-1 overflow-auto min-h-0">
        <DataTable<ReviewDTO>
          data={reviews}
          columns={[
            {
              key: "user",
              label: "Author",
              render: (user) => (user as User).name,
            },
            {
              key: "rating",
              label: "Rating",
              render: (rating) => <RatingStars rating={rating as number} />,
            },
            {
              key: "rating",
              render: (rating) => <RatingStars rating={rating as number} />,
            },
            { key: "summary", label: "Summary" },
            {
              key: "id",
              render: (_, album) => (
                <ViewDetailsLink basePath={basePath} id={album.id} />
              ),
            },
            {
              key: "id",
              render: (_, album) => <TableActions id={album.id} />,
            },
          ]}
        />
      </div>
      <Pagination page={page} total={total} pageSize={PAGE_SIZE} />
    </div>
  );
}
