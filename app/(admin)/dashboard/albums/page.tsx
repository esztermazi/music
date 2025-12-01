"use client";

import DataTable from "@/components/data-table/DataTable";
import { TableActions } from "@/components/data-table/TableActions";
import { AlbumDTO } from "@/types/album";
import { Artist } from "@/types/artist";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Pagination } from "@/components/data-table/Pagination";
import { ViewDetailsLink } from "@/components/data-table/ViewDetailsLink";
import { PAGE_SIZE } from "@/lib/constants";

export default function AdminAlbumsPage() {
  const [albums, setAlbums] = useState<AlbumDTO[]>([]);
  const [total, setTotal] = useState<number>(0);
  const search = useSearchParams();
  const page = Number(search.get("page") ?? 1);
  const basePath = "/albums";

  useEffect(() => {
    fetch(`/api${basePath}?start=${(page - 1) * PAGE_SIZE}&limit=${PAGE_SIZE}`)
      .then((res) => res.json())
      .then((data) => {
        setAlbums(data.albums);
        setTotal(data.total);
      });
  }, [page]);

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
