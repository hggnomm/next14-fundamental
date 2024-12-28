import Card from "@/components/card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <div>Notifications</div>
      <Link href={"/complex-dashboard/archived"} className="bg-pink-50 p-1">Archived</Link>
    </Card>
  );
}
