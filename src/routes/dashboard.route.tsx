import { createFileRoute, Outlet } from "@tanstack/react-router";
import { DashboardSidebar } from "./-components/dashboard-sidebar";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex h-[calc(100vh-4rem)] bg-background">
      <DashboardSidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
