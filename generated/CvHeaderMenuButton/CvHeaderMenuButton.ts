export type CvHeaderMenuButtonProps = {
  /** `true` if the button should represent its active state. */
  active?: boolean;

  /** The `aria-label` attribute for the button in its active state. */
  buttonLabelActive?: string;

  /** The `aria-label` attribute for the button in its inactive state. */
  buttonLabelInactive?: string;

  /** Collapse mode of the side nav. */
  collapseMode?: string;

  /** `true` if the button should be disabled. */
  disabled?: boolean;

  /** If `true` will style the side nav to sit below the header */
  isNotChildOfHeader?: boolean;
};
