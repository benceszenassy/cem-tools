export type CvSideNavMenuProps = {
  /** `true` if the menu has active menu item. */
  active?: boolean;

  /** `true` if the menu should be open. */
  expanded?: boolean;

  /** Specify if this is a large variation of the side nav menu */
  large?: boolean;

  /** `true` if the menu should be forced collapsed upon side nav's expanded state. */
  forceCollapsed?: boolean;

  /** The title text. */
  title?: string;
};
