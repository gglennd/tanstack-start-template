import { createFileRoute } from "@tanstack/react-router";
import { SignupForm } from "./-components/signup-form";

export const Route = createFileRoute("/signup")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2 text-balance">Welcome to Our Platform</h1>
          <p className="text-muted-foreground text-pretty">
            Join thousands of users who trust us with their digital experience
          </p>
        </div>
        <SignupForm />
      </div>
    </div>
  );
}
