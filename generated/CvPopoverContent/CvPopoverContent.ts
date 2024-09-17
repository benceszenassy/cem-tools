export type CvPopoverContentProps = {
  /** Specify the popover alignment */
  align?: string;

  /** Specify whether a auto align functionality should be applied */
  autoalign?: boolean;

  /** Specify whether a caret should be rendered */
  caret?: string;

  /** Specify whether a dropShadow should be rendered */
  dropShadow?: boolean;

  /** Specify whether the component is currently open or closed */
  open?: boolean;

  /** Render the component using the tab tip variant */
  tabTip?: boolean;

  /** The shadow slot this popover content should be in. */
  slot?: string;
};
