import React from 'react';
import { cn } from '../../lib/utils';
import { UserAvatarGroupProps } from '../../types';

// ============================================================================
// UI COMPONENTS
// Mimicking shadcn/ui Avatar components.
// ============================================================================

const Avatar = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & { children?: React.ReactNode }
>(({ className, children, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
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
// USER AVATAR GROUP COMPONENT
// ============================================================================

export const UserAvatarGroup: React.FC<UserAvatarGroupProps> = ({ users, maxVisible = 3 }) => {
  const visibleUsers = users.slice(0, maxVisible);
  const hiddenUsersCount = users.length - maxVisible;

  return (
    <div className="flex -space-x-4">
      {visibleUsers.map((user) => (
        <Avatar key={user.id} className="border-2 border-background">
          <AvatarImage src={user.imageUrl} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
      ))}
      {hiddenUsersCount > 0 && (
        <Avatar className="border-2 border-background">
          <AvatarFallback>+{hiddenUsersCount}</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};

export default UserAvatarGroup;
