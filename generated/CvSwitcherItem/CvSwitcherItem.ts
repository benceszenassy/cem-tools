export type CvSwitcherItemProps = {
  /** Required props for accessibility label */
  ariaLabel?: string;

  /** Props for accessibility labelled by */
  ariaLabelledBy?: string;

  /** Link `href`. */
  href?: string;

  /** Specify if this is a large variation of the side nav link */
  selected?: boolean;

  /** Specify if this is a large variation of the side nav link */
  tabIndex?: number;
};
