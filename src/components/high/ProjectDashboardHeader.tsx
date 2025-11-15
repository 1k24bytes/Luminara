import React from 'react';
import { User } from '../../types';
import { UserAvatarGroup } from '../mid/UserAvatarGroup';
import { cn } from '../../lib/utils';

// ============================================================================
// DUMMY DATA
// ============================================================================
const projectUsers: User[] = [
  { id: '1', name: 'Alice', imageUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
  { id: '2', name: 'Bob', imageUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026705d' },
  { id: '3', name: 'Charlie', imageUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026706d' },
  { id: '4', name: 'David', imageUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026707d' },
  { id: '5', name: 'Eve', imageUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026708d' },
];

// ============================================================================
// UI COMPONENTS
// Self-contained Button component styled to mimic shadcn/ui variants.
// ============================================================================

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'outline';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variantClasses = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    };

    return (
      <button
        className={cn(baseClasses, variantClasses[variant], className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";


// ============================================================================
// PROJECT DASHBOARD HEADER COMPONENT
// ============================================================================

export const ProjectDashboardHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-between gap-4 border-b border-border pb-6 md:flex-row md:items-center">
      <div className="flex-grow">
        <h1 className="text-3xl font-bold tracking-tight">Aurora UI Project</h1>
        <p className="mt-1 text-muted-foreground">
          A dashboard to manage and track the progress of the component library.
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <UserAvatarGroup users={projectUsers} maxVisible={3} />
        <Button variant="outline">Share</Button>
        <Button>Invite</Button>
      </div>
    </div>
  );
};

export default ProjectDashboardHeader;
