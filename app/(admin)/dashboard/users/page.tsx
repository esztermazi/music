"use client";

import DataTable from "@/components/data-table/DataTable";
import { TableActions } from "@/components/data-table/TableActions";
import { User } from "@/types/user";
import { useEffect, useState } from "react";

export default function UsersTable() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <DataTable<User>
      data={users}
      columns={[
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        {
          key: "id",
          render: (_, user) => <TableActions id={user.id} />,
        },
      ]}
    />
  );
}
