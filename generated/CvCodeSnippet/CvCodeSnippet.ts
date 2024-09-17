export type CvCodeSnippetProps = {
  /** Optional text to copy. If not specified, the `children` node's `innerText`
will be used as the copy value. */
  copyText?: string;

  /** `true` if the button should be disabled. */
  disabled?: boolean;

  /** Specify the string displayed when the snippet is copied */
  feedback?: string;

  /** Specify the time it takes for the feedback message to timeout */
  feedbackTimeout?: number;

  /** Specify whether or not a copy button should be used/rendered. */
  hideCopyButton?: boolean;

  /** Specify the maximum number of rows to be shown when in collapsed view */
  maxCollapsedNumberOfRows?: number;

  /** Specify the maximum number of rows to be shown when in expanded view */
  maxExpandedNumberOfRows?: number;

  /** Specify the minimum number of rows to be shown when in collapsed view */
  minCollapsedNumberOfRows?: number;

  /** Specify the minimum number of rows to be shown when in expanded view */
  minExpandedNumberOfRows?: number;

  /** Specify a string that is displayed when the Code Snippet has been
interacted with to show less lines */
  showLessText?: string;

  /** Specify a string that is displayed when the Code Snippet text is more
than 15 lines */
  showMoreText?: string;

  /** Tooltip content for the copy button. */
  tooltipContent?: string;

  /** `true` if the button should be disabled. */
  wrapText?: boolean;

  /** The type of code snippet. */
  type?: string;
};
