export type CvTearsheetProps = {
  /** Optional aria label for the tearsheet */
  ariaLabel?: string;

  /** Sets the close button icon description */
  closeIconDescription?: string;

  /** Enable a close icon ('x') in the header area of the tearsheet. By default,
(when this prop is omitted, or undefined or null) a tearsheet does not
display a close icon if there are navigation actions ("transactional
tearsheet") and displays one if there are no navigation actions ("passive
tearsheet"), and that behavior can be overridden if required by setting
this prop to either true or false. */
  hasCloseIcon?: boolean;

  /** The placement of the influencer section, 'left' or 'right'. */
  influencerPlacement?: string;

  /** The width of the influencer section, 'narrow' or 'wide'. */
  influencerWidth?: string;

  /** `true` if the tearsheet should be open. */
  open?: boolean;

  /** Prevent closing on click outside of tearsheet */
  preventCloseOnClickOutside?: boolean;

  /** The initial location of focus in the side panel */
  selectorInitialFocus?: string;

  /** The width of the influencer section, 'narrow' or 'wide'. */
  width?: string;
};
