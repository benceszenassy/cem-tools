export type CvExpandableTileProps = {
  /** The color scheme. */
  colorScheme?: string;

  /** `true` to expand this expandable tile. */
  expanded?: boolean;

  /** Specify if the `ExpandableTile` component should be rendered with rounded corners.
Only valid when `slug` prop is present */
  hasRoundedCorners?: boolean;

  /** `true` to expand this expandable tile. */
  withInteractive?: boolean;
};
