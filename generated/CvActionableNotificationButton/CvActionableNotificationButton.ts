export type CvActionableNotificationButtonProps = {
  /** `true` if the button should have input focus when the page loads. */
  autofocus?: boolean;

  /** `true` if the button is being used within a data table batch action toolbar */
  batchAction?: boolean;

  /** Specify an optional className to be added to your Button */
  buttonClassName?: string;

  /** Specify the message read by screen readers for the danger button variant */
  dangerDescriptor?: string;

  /** `true` if the button should be disabled. */
  disabled?: boolean;

  /** The default file name, used if this button is rendered as `<a>`. */
  download?: string;

  /** `true` if there is a non-icon content. */
  hasMainContent?: boolean;

  /** Link `href`. If present, this button is rendered as `<a>`. */
  href?: string;

  /** The language of what `href` points to, if this button is rendered as `<a>`. */
  hreflang?: string;

  /** `true` if expressive theme enabled. */
  isExpressive?: boolean;

  /** Specify whether the Button is currently selected.
Only applies to the Ghost variant. */
  isSelected?: boolean;

  /** Button kind. */
  kind?: string;

  /** The a11y role for `<a>`. */
  linkRole?: string;

  /** Boolean to determine if tooltip is open. */
  openTooltip?: boolean;

  /** URLs to ping, if this button is rendered as `<a>`. */
  ping?: string;

  /** The link type, if this button is rendered as `<a>`. */
  rel?: string;

  /** Button size. */
  size?: string;

  /** The link target, if this button is rendered as `<a>`. */
  target?: string;

  /** Specify the alignment of the tooltip to the icon-only button.
Can be one of: start, center, or end. */
  tooltipAlignment?: string;

  /** Specify the direction of the tooltip for icon-only buttons.
Can be either top, right, bottom, or left. */
  tooltipPosition?: string;

  /** Specify the direction of the tooltip for icon-only buttons.
Can be either top, right, bottom, or left. */
  tooltipText?: string;

  /** Button type. */
  type?: string;
};
