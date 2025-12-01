"use client";

import { Button } from "@/components/ui/button";
import { EditIcon, TrashIcon } from "lucide-react";

export function TableActions({ id }: { id: string }) {
  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={() => console.log("edit", id)}
      >
        <EditIcon className="size-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={() => console.log("delete", id)}
      >
        <TrashIcon className="size-4" />
      </Button>
    </div>
  );
}
