// ============================================================================
// SHARED TYPES
// ============================================================================

/**
 * Represents a user in the system.
 */
export interface User {
  id: string;
  name: string;
  imageUrl: string;
}

/**
 * Represents a single activity event in a feed.
 */
export interface Activity {
  user: {
    name: string;
    avatarUrl: string;
  };
  action: string;
  target: string;
  timestamp: string;
}

/**
 * Represents a pricing plan for the PricingTable component.
 */
export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}


// ============================================================================
// COMPONENT PROPS
// ============================================================================

/**
 * Props for the StatsCard component.
 */
export interface StatsCardProps {
  title: string;
  metric: string;
  change: string;
  changeType: 'positive' | 'negative';
}

/**
 * Props for the UserAvatarGroup component.
 */
export interface UserAvatarGroupProps {
  users: User[];
  maxVisible?: number;
}

/**
 * Props for the ActivityItem component.
 */
export type ActivityItemProps = Activity;


/**
 * Props for the RecentActivityFeed component.
 */
export interface RecentActivityFeedProps {
  activities: Activity[];
}
