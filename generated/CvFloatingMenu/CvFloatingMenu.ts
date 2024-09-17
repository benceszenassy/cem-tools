export type CvFloatingMenuProps = {
  /** The menu direction. */
  direction?: FLOATING_MENU_DIRECTION;

  /** `true` if the menu should be open. */
  open?: boolean;

  /** `true` if the menu alignment should be flipped. */
  flipped?: boolean;

  /** The DOM element to put this menu into. */
  container?: string;

  /** The position of this floating menu. */
  position?: FloatingMenuPosition;
};
