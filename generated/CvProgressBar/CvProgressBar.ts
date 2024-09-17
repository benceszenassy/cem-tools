export type CvProgressBarProps = {
  /** The current progress as a textual representation. */
  helperText?: string;

  /** Whether the label should be visually hidden. */
  hideLabel?: string;

  /** A label describing the progress bar. */
  label?: string;

  /** The maximum value. */
  max?: number;

  /** Specify the size of the ProgressBar. */
  size?: string;

  /** Specify the status. */
  status?: string;

  /** Defines the alignment variant of the progress bar. */
  type?: string;

  /** The current value. */
  value?: string;
};
