import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function NavbarItem({ path }: { path: string }) {
  const username = useSelector((state: RootState) => state.user.user?.username);

  const isUserPath = username && path === username;

  const actualPath = isUserPath ? "dashboard" : path;

  const label = path ? path.charAt(0).toUpperCase() + path.slice(1) : "";

  return <Link href={`/${actualPath}`}>{label}</Link>;
}
