export type CvSelectableTileProps = {
  /** The a11y text for the checkmark icon of the selected state. */
  checkmarkLabel?: string;

  /** The color scheme. */
  colorScheme?: string;

  /** Specify if the `SeletableTile` component should be rendered with rounded corners.
Only valid when `slug` prop is present */
  hasRoundedCorners?: boolean;

  /** The form name. */
  name?: string;

  /** `true` to show the selected state. */
  selected?: boolean;

  /** The form value. */
  value?: string;
};
