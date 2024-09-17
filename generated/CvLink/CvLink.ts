export type CvLinkProps = {
  /** `true` if the link should be disabled. */
  disabled?: boolean;

  /** The default file name. */
  download?: string;

  /** Link `href`. */
  href?: string;

  /** The language of what `href` points to. */
  hreflang?: string;

  /** `true` if the link should be inline. */
  inline?: boolean;

  /** The a11y role for `<a>`. */
  linkRole?: string;

  /** URLs to ping. */
  ping?: string;

  /** The link type. */
  rel?: string;

  /** Link size. */
  size?: LINK_SIZE_TYPE;

  /** The link target. */
  target?: string;

  /** MIME type of the `target`. */
  type?: string;

  /** `true` if the link has been visited. */
  visited?: boolean;
};
