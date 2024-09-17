export type CvOverflowMenuProps = {
  /** `true` if this tooltip is in a data table row */
  dataTable?: boolean;

  /** `true` if this overflow menu should be disabled. */
  disabled?: boolean;

  /** `true` if this overflow menu body should be flipped. */
  flipped?: boolean;

  /** `true` if the dropdown should be open. */
  open?: boolean;

  /** Index (starting at 1) of overflow menu item to focus on open. */
  index?: number;

  /** Overflow menu size. */
  size?: string;

  /** `true` if this menu is a toolbar action */
  toolbarAction?: boolean;

  /** Specify how the trigger should align with the tooltip */
  align?: string;

  /** Specify whether a auto align functionality should be applied */
  autoalign?: boolean;

  /** Determines whether the tooltip should close when inner content is activated (click, Enter or Space) */
  closeOnActivation?: boolean;

  /** Specify whether the tooltip should be open when it first renders */
  defaultOpen?: boolean;

  /** Specify the duration in milliseconds to delay before displaying the tooltip */
  enterDelayMs?: number;

  /** Specify the duration in milliseconds to delay before hiding the tooltip */
  leaveDelayMs?: number;

  /** `true` if the button should have input focus when the page loads. */
  autofocus?: boolean;

  /** `true` if the button is being used within a data table batch action toolbar */
  batchAction?: boolean;

  /** Specify an optional className to be added to your Button */
  buttonClassName?: string;

  /** Specify the message read by screen readers for the danger button variant */
  dangerDescriptor?: string;

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
