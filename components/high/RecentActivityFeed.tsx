import React from 'react';
import { cn } from '@/lib/utils';
import { RecentActivityFeedProps, Activity } from '@/types';
import { ActivityItem } from '@/components/mid/ActivityItem';

// ="============================================================================"
// DUMMY DATA
// ="============================================================================"
const dummyActivities: Activity[] = [
    {
        user: { name: 'Alex', avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
        action: 'pushed a commit to',
        target: 'aurora-ui/main',
        timestamp: '1h ago',
    },
    {
        user: { name: 'Beth', avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026705d' },
        action: 'commented on',
        target: 'PR #124: Button Component',
        timestamp: '3h ago',
    },
    {
        user: { name: 'Charles', avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026706d' },
        action: 'opened a new issue',
        target: '#58: IE11 Compatibility',
        timestamp: '5h ago',
    },
     {
        user: { name: 'Diana', avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026707d' },
        action: 'merged',
        target: 'PR #122: Fix Typo in Docs',
        timestamp: '1d ago',
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

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

// ============================================================================
// RECENT ACTIVITY FEED COMPONENT
// ============================================================================

export const RecentActivityFeed: React.FC<RecentActivityFeedProps> = ({ activities = dummyActivities }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activities.map((activity, index) => (
            <ActivityItem key={index} {...activity} />
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <a
          href="#"
          className="text-sm font-medium text-primary hover:underline"
        >
          View all activity
        </a>
      </CardFooter>
    </Card>
  );
};

export default RecentActivityFeed;
