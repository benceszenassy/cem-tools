export type CvTooltipProps = {
  /** Specify how the trigger should align with the tooltip */
  align?: string;

  /** Specify whether a auto align functionality should be applied */
  autoalign?: boolean;

  /** `true` if this tooltip is in a data table row */
  dataTable?: boolean;

  /** Specify whether the tooltip should be closed when clicked */
  closeOnActivation?: boolean;

  /** Specify whether the tooltip should be open when it first renders */
  defaultOpen?: boolean;

  /** Specify the duration in milliseconds to delay before displaying the tooltip */
  enterDelayMs?: number;

  /** Specify the duration in milliseconds to delay before hiding the tooltip */
  leaveDelayMs?: number;

  /** Specify the size of the tooltip */
  size?: boolean;

  /** Specify the timeout reference for the tooltip */
  timeoutId?: number;

  /** Specify whether the tooltip should be open when it first renders */
  toolbarAction?: boolean;

  /** Specify whether a caret should be rendered */
  caret?: boolean;

  /** Specify whether a dropShadow should be rendered */
  dropShadow?: boolean;

  /** Render the component using the high-contrast variant */
  highContrast?: boolean;

  /** Specify whether the component is currently open or closed */
  open?: boolean;

  /** Render the component using the tab tip variant */
  tabTip?: boolean;
};
