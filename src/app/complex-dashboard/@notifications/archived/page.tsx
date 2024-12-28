import Card from "@/components/card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      <div>Archived Notifications</div>
      <br />
      <Link href={"/complex-dashboard"} className="bg-pink-50 p-1">Default</Link>
    </Card>
  );
}
