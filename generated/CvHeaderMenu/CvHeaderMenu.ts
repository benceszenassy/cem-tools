export type CvHeaderMenuProps = {
  /** `true` if the menu should be expanded. */
  expanded?: boolean;

  /** Applies selected styles to the item if a user sets this to true and `aria-current !== 'page'`. */
  isActive?: boolean;

  /** The content of the trigger button. */
  triggerContent?: string;

  /** The `aria-label` attribute for the menu UI. */
  menuLabel?: string;
};
