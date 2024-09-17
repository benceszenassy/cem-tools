export type CvCopyButtonProps = {
  /** Specify an optional className to be added to your Button */
  buttonClassName?: string;

  /** `true` if the button should be disabled. */
  disabled?: boolean;

  /** Specify the string that is displayed when the button is clicked and the content is copi */
  feedback?: string;

  /** The number in milliseconds to determine how long the tooltip should remain. */
  feedbackTimeout?: number;
};
