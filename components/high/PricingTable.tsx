import React from 'react';
import { cn } from '@/lib/utils';
import { PricingPlan } from '@/types';

// ============================================================================
// DUMMY DATA
// ============================================================================
const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$29/mo',
    features: [
      '5 Projects',
      'Basic Analytics',
      'Community Support',
      'Email Updates',
    ],
  },
  {
    name: 'Pro',
    price: '$79/mo',
    features: [
      '25 Projects',
      'Advanced Analytics',
      'Priority Support',
      'Team Collaboration',
      'API Access',
    ],
    recommended: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Unlimited Projects',
      'Dedicated Support',
      'Custom Integrations',
      'SSO & Security',
      '24/7 Uptime SLA',
    ],
  },
];

// ============================================================================
// UI COMPONENTS
// ============================================================================

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium w-full";
    const variantClasses = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    };
    return <button className={cn(baseClasses, variantClasses[variant], className)} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

// ============================================================================
// PRICING TABLE COMPONENT
// ============================================================================

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={cn("h-5 w-5", className)}
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.06-1.06L10.5 14.19l-1.72-1.72a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.06 0l4.5-4.5z"
      clipRule="evenodd"
    />
  </svg>
);


export const PricingTable: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      {pricingPlans.map((plan) => (
        <Card
          key={plan.name}
          className={cn(
            "flex flex-col",
            plan.recommended ? "border-primary ring-2 ring-primary" : ""
          )}
        >
          <div className="p-6">
            {plan.recommended && (
                <div className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Most Popular
                </div>
            )}
            <h3 className="mt-2 text-2xl font-bold">{plan.name}</h3>
            <p className="mt-4 text-4xl font-bold tracking-tight">{plan.price}</p>
          </div>

          <div className="flex-grow p-6 pt-0">
            <ul className="space-y-3">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <CheckIcon className="mr-3 text-green-500" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 pt-0">
             <Button variant={plan.recommended ? 'default' : 'outline'}>
                Get Started
             </Button>
          </div>

        </Card>
      ))}
    </div>
  );
};

export default PricingTable;
