import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Home, Users } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/utils/cn";

const sidebarItems = [
  { icon: Home, label: "Overview", active: true, href: "/dashboard/" },
  { icon: Users, label: "Account", href: "/dashboard/account" },
];

export function DashboardSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Card
      className={cn(
        "h-full bg-sidebar border-sidebar-border transition-all duration-300 rounded-none border-r border-t-0 border-b-0 border-l-0",
        isCollapsed ? "w-16" : "w-64",
      )}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
          {!isCollapsed && <h2 className="text-lg font-semibold text-sidebar-foreground">Dashboard</h2>}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-sidebar-foreground hover:bg-sidebar-accent"
          >
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {sidebarItems.map((item, index) => (
            <Button
              key={index}
              asChild
              variant={item.active ? "default" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 text-sidebar-foreground",
                item.active && "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90",
                !item.active && "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                isCollapsed && "justify-center px-2",
              )}
            >
              <Link to={item.href}>
                <item.icon className="h-4 w-4 flex-shrink-0" />
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
            </Button>

          ))}
        </nav>
      </div>
    </Card>
  );
}
