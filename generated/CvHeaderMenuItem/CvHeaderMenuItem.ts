export type CvHeaderMenuItemProps = {
  /** Link `href`. */
  href?: string;

  /** The link type. */
  rel?: string;

  /** The link target. */
  target?: string;

  /** The title. */
  title?: string;

  /** Applies selected styles to the item if a user sets this to true and `aria-current !== 'page'`. */
  isActive?: boolean;

  /** indicates that this element represents the current item */
  ariaCurrent?: string;

  /** As child of <ul>, this element must have role of listitem */
  role?: string;
};
