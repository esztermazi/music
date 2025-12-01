import DataTable from "@/components/data-table/DataTable";
import { Pagination } from "@/components/data-table/Pagination";
import { ViewDetailsLink } from "@/components/data-table/ViewDetailsLink";
import { RatingStars } from "@/components/ui/rating-stars";
import { PAGE_SIZE } from "@/lib/constants";
import { ReviewDTO } from "@/types/review";
import { User } from "@/types/user";

export default async function ReviewssPage(props: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageString } = await props.searchParams;

  const page = Number(pageString ?? "1");
  const start = (page - 1) * PAGE_SIZE;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const basePath = "/reviews";
  const res = await fetch(
    `${baseUrl}/api${basePath}?start=${start}&limit=${PAGE_SIZE}`,
    { cache: "no-store" }
  );

  const { reviews, total } = await res.json();

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
            { key: "summary", label: "Summary" },
            {
              key: "id",
              render: (_, album) => (
                <ViewDetailsLink basePath={basePath} id={album.id} />
              ),
            },
          ]}
        />
      </div>
      <Pagination page={page} total={total} pageSize={PAGE_SIZE} />
    </div>
  );
}
