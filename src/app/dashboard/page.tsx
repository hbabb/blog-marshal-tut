import { Button } from "@/components/ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function DashboardIndexPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <LogoutLink>
        <Button variant="default">Logout</Button>
      </LogoutLink>
    </div>
  );
}
