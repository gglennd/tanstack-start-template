import { createFileRoute } from "@tanstack/react-router";
import { LoginForm } from "./-components/login-form";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2 text-balance">Sign In</h1>
          <p className="text-muted-foreground text-pretty">Access your account and continue your journey with us</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
