/**
 * App Color Palette
 * 
 * This file contains all color constants used throughout the application.
 * Import colors from this file to maintain consistency across the app.
 * 
 * Usage:
 *   import { colors } from '@/constants/colors';
 *   <View style={{ backgroundColor: colors.primary }} />
 */

export const colors = {
  // Primary brand color - main accent color
  primary: '#FF385C',
  
  // Secondary brand color - complementary accent
  secondary: '#00A699',
  
  // Background colors
  background: '#FAF9F6',
  card: '#FFFFFF',
  
  // Text colors
  text: '#222222',
  subtitle: '#6A6A6A',
  muted: '#717171',
  
  // Border and divider colors
  border: '#DDDDDD',
} as const;

/**
 * Type-safe color values
 */
export type ColorName = keyof typeof colors;

/**
 * Get color by name (useful for dynamic color selection)
 */
export const getColor = (colorName: ColorName): string => {
  return colors[colorName];
};

/**
 * Color usage guide:
 * 
 * - primary: Use for primary actions, links, and important highlights
 * - secondary: Use for secondary actions and complementary elements
 * - background: Main app background color
 * - card: Background color for cards, modals, and elevated surfaces
 * - text: Primary text color for main content
 * - subtitle: Secondary text for labels, captions, and less important text
 * - muted: Tertiary text for hints, placeholders, and disabled states
 * - border: Borders, dividers, and separators
 */

