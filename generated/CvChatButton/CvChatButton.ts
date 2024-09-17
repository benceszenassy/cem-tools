export type CvChatButtonProps = {
  /** `true` if the button should be disabled. */
  disabled?: boolean;

  /** Specify whether the `ChatButton` should be disabled */
  kind?: string;

  /** Chat button size. */
  size?: string;

  /** Specify whether the `ChatButton` should be rendered as a quick action button */
  isQuickAction?: boolean;

  /** Specify whether the quick action `ChatButton` should be rendered as selected. This disables the input */
  isSelected?: boolean;
};
