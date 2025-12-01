import DataTable from "@/components/data-table/DataTable";
import { Pagination } from "@/components/data-table/Pagination";
import { ViewDetailsLink } from "@/components/data-table/ViewDetailsLink";
import { PAGE_SIZE } from "@/lib/constants";
import { AlbumDTO } from "@/types/album";
import { Artist } from "@/types/artist";
import Image from "next/image";

export default async function AlbumsPage(props: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageString } = await props.searchParams;

  const page = Number(pageString ?? "1");
  const start = (page - 1) * PAGE_SIZE;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const basePath = "/albums";
  const res = await fetch(
    `${baseUrl}/api${basePath}?start=${start}&limit=${PAGE_SIZE}`,
    { cache: "no-store" }
  );

  const { albums, total } = await res.json();

  return (
    <div className="flex flex-col flex-1 min-h-0">
      <div className="flex-1 overflow-auto min-h-0">
        <DataTable<AlbumDTO>
          data={albums}
          columns={[
            {
              key: "cover",
              label: "Cover",
              render: (cover) => (
                <Image
                  src={cover as string}
                  width={60}
                  height={60}
                  alt="album-cover"
                  className="w-12 h-12 rounded-md object-cover"
                />
              ),
            },
            { key: "title", label: "Title" },
            {
              key: "artist",
              label: "Artist",
              render: (artist) => (artist as Artist).name,
            },
            { key: "releaseYear", label: "Release" },
            { key: "rating", label: "Rating" },
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
