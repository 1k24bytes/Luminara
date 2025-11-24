import React from 'react';
import { cn } from '@/lib/utils';
import { ProjectDashboardHeader } from '@/components/high/ProjectDashboardHeader';

// ============================================================================
// UI COMPONENTS
// Self-contained components styled to mimic shadcn/ui.
// ============================================================================

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'outline';
  size?: 'default' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const sizeClasses = {
      default: "h-10 px-4 py-2",
      lg: "h-12 rounded-md px-8 text-md",
    };

    const variantClasses = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    };

    return (
      <button
        className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

const FeatureCard = ({ title, description }: { title: string; description: string }) => (
  <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-muted-foreground">{description}</p>
  </div>
);

// ============================================================================
// HOMEPAGE COMPONENT
// ============================================================================

export const Homepage: React.FC = () => {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="container mx-auto flex flex-col items-center justify-center py-20 text-center">
        <h1 className="text-5xl font-bold tracking-tighter md:text-6xl">
          Aurora UI: The Future of Your Application
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          A modern, composable, and developer-owned component library built with
          React, TypeScript, and Tailwind CSS.
        </p>
        <div className="mt-8 flex gap-4">
          <Button size="lg">Get Started</Button>
          <Button variant="secondary" size="lg">View on GitHub</Button>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section className="container mx-auto py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <FeatureCard
            title="TypeScript Ready"
            description="Fully typed components for a superior developer experience and robust, error-free code."
          />
          <FeatureCard
            title="Tailwind Powered"
            description="Styled with Tailwind CSS for maximum customizability without ever leaving your HTML."
          />
          <FeatureCard
            title="Copy & Paste"
            description="Own your code. No black boxes. Just copy, paste, and customize components as you see fit."
          />
        </div>
      </section>

      {/* Component Preview Section */}
      <section className="container mx-auto py-16">
        <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
                Component Preview
            </h2>
            <p className="mt-2 text-muted-foreground">
                See one of our high-level components in action.
            </p>
        </div>
        <div className="mt-8 rounded-lg border bg-card p-8 shadow-sm">
          <ProjectDashboardHeader />
        </div>
      </section>
    </div>
  );
};

export default Homepage;
