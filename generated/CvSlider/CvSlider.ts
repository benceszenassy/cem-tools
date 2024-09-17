export type CvSliderProps = {
  /** `true` if the check box should be disabled. */
  disabled?: boolean;

  /** true to specify if the control is required. */
  required?: boolean;

  /** Whether the slider should be read-only */
  readonly?: boolean;

  /** The label text. */
  labelText?: string;

  /** The label associated with the maximum value. */
  maxLabel?: string;

  /** The label associated with the minimum value. */
  minLabel?: string;

  /** The formatter for the text for maximum value.
Should be changed upon the locale the UI is rendered with. */
  formatMaxText?: string;

  /** The formatter for the text for min/max value.
Should be changed upon the locale the UI is rendered with. */
  formatMinText?: string;

  /** The maximum value. */
  max?: string;

  /** The minimum value. */
  min?: string;

  /** The form name. */
  name?: string;

  /** true to specify if the control is invalid. */
  invalid?: boolean;

  /** Message which is displayed if the value is invalid. */
  invalidText?: string;

  /** true to specify if the control should display warn icon and text. */
  warn?: boolean;

  /** Provide the text that is displayed when the control is in warning state */
  warnText?: string;

  /** The snapping step of the value. */
  step?: string;

  /** A value determining how much the value should increase/decrease by Shift+arrow keys,
which will be `(max - min) / stepMultiplier`. */
  stepMultiplier?: string;

  /** The value. */
  value?: string;

  /** is slide input valid */
  isValid?: string;
};
