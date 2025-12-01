import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ALBUMS_COUNT, USER_COUNT } from "@/lib/constants";

export default function Dashboard() {
  return (
    <div className="flex h-full flex-1 items-center justify-center gap-8">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
        <Card className="p-4">
          <CardHeader>
            <CardTitle className="text-center">{USER_COUNT}</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-bold text-center">
            Total <Link href="dashboard/users">Users</Link>
          </CardContent>
        </Card>

        <Card className="p-4">
          <CardHeader>
            <CardTitle className="text-center">{ALBUMS_COUNT}</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-bold text-center">
            Total <Link href="dashboard/albums">Albums</Link>
          </CardContent>
        </Card>

        <Card className="p-4">
          <CardHeader>
            <CardTitle className="text-center">{ALBUMS_COUNT}</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-bold text-center">
            Total <Link href="dashboard/reviews">Reviews</Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
