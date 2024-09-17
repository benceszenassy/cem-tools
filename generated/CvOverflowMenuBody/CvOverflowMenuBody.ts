export type CvOverflowMenuBodyProps = {
  /** The menu direction. */
  direction?: FLOATING_MENU_DIRECTION;

  /** How the menu is aligned to the trigger button. */
  flipped?: boolean;

  /** The overflow menu size. */
  size?: string;

  /** The DOM element to put this menu into. */
  container?: string;

  /** The position of this floating menu. */
  position?: FloatingMenuPosition;
};
