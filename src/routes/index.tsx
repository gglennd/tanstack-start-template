import { createFileRoute, Link } from "@tanstack/react-router";

import { ArrowRight, CheckCircle, Shield, Star, Users, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="bg-background min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4 bg-accent text-accent-foreground">
            ✨ New Platform Launch
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Transform Your Digital Experience
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Join thousands of users who trust our platform to streamline their workflow, boost productivity, and achieve
            their goals faster than ever before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/signup">
                Get Started Free
                {" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our comprehensive platform provides all the tools and features you need to take your productivity to the
              next level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-card-foreground">Lightning Fast</CardTitle>
                <CardDescription>
                  Experience blazing-fast performance with our optimized infrastructure and cutting-edge technology
                  stack.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-card-foreground">Secure & Reliable</CardTitle>
                <CardDescription>
                  Your data is protected with enterprise-grade security and 99.9% uptime guaranteed by our robust
                  infrastructure.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-card-foreground">Team Collaboration</CardTitle>
                <CardDescription>
                  Work seamlessly with your team using real-time collaboration tools and advanced sharing capabilities.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-balance">Trusted by Industry Leaders</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>

          <Card className="bg-card border-border p-8">
            <div className="flex items-center justify-center mb-4">
              {[...Array.from({ length: 5 })].map((_, index) => (
                <Star key={index} className="h-5 w-5 text-accent fill-current" />
              ))}
            </div>
            <blockquote className="text-lg text-card-foreground mb-4 text-pretty">
              "This platform has completely transformed how our team works. The intuitive interface and powerful
              features have increased our productivity by 300%."
            </blockquote>
            <cite className="text-muted-foreground">— Sarah Johnson, CEO at TechCorp</cite>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 text-pretty">
            Join thousands of satisfied users and transform your workflow today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <Link to="/signup">
                Start Free Trial
                {" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <Link to="/dashboard">View Demo</Link>
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-4 text-sm opacity-75">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              14-day free trial
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
