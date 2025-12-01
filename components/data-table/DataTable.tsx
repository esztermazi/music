import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export interface Column<T, K extends keyof T = keyof T> {
  key: K;
  label?: string;
  render?: (value: T[K], row: T) => React.ReactNode;
}

export default function DataTable<T>({
  data,
  columns,
}: {
  data: T[];
  columns: Column<T>[];
}) {
  return (
    <div className="h-full overflow-auto">
      <Table className="min-w-[900px]">
        <TableHeader>
          <TableRow>
            {columns.map((col, index) => (
              <TableHead key={`${col.key.toString()}-${index}`}>
                {col.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((row, i) => (
            <TableRow key={i}>
              {columns.map((col, index) => (
                <TableCell key={`${col.key.toString()}-${index}`}>
                  {col.render
                    ? col.render(row[col.key], row)
                    : (row[col.key] as React.ReactNode)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
