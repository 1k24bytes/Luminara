import React from 'react';
import { cn } from '../../lib/utils';
import { ActivityItemProps } from '../../types';

// ============================================================================
// UI COMPONENTS
// Mimicking shadcn/ui Avatar components for self-containment.
// ============================================================================

const Avatar = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & { children?: React.ReactNode }
>(({ className, children, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  >
    {children}
  </span>
));
Avatar.displayName = "Avatar";

const AvatarImage = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
>(({ className, ...props }, ref) => (
  <img
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = "AvatarImage";

const AvatarFallback = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = "AvatarFallback";


// ============================================================================
// ACTIVITY ITEM COMPONENT
// ============================================================================

export const ActivityItem: React.FC<ActivityItemProps> = ({ user, action, target, timestamp }) => {
  return (
    <div className="flex items-center space-x-4">
      <Avatar>
        <AvatarImage src={user.avatarUrl} alt={user.name} />
        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-grow">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{user.name}</span>
          {' '}
          {action}
          {' '}
          <span className="font-medium text-foreground">{target}</span>
        </p>
      </div>
      <p className="text-sm text-muted-foreground">{timestamp}</p>
    </div>
  );
};

export default ActivityItem;
