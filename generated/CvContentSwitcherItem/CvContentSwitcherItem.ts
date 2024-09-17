export type CvContentSwitcherItemProps = {
  /** `true` if this content switcher item should be disabled. */
  disabled?: boolean;

  /** The element ID of target panel. */
  target?: string;

  /** The `value` attribute that is set to the parent `<cds-content-switcher>`
when this content switcher item is selected. */
  value?: string;

  /** `true` if the content switcher button should be icon-only. */
  icon?: boolean;

  /** Specify how the trigger should align with the tooltip for icon-only
switcher item */
  align?: string;

  /** Determines whether the tooltip should close when inner content is
activated (click, Enter or Space) */
  closeOnActivation?: boolean;

  /** Specify the duration in milliseconds to delay before displaying the
tooltip for icon-only switcher item */
  enterDelayMs?: number;

  /** Specify the duration in milliseconds to delay before hiding the tooltip
for icon-only switcher-item

TODO: match upstream value once #10471 is resolved */
  leaveDelayMs?: number;
};
