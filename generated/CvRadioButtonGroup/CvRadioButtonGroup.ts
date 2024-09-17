export type CvRadioButtonGroupProps = {
  /** The `value` attribute for the `<input>` for selection. */
  defaultSelected?: string;

  /** `true` if the radio button group should be disabled. */
  disabled?: boolean;

  /** The label position. */
  labelPosition?: string;

  /** The label position. */
  legendText?: string;

  /** The helper text. */
  helperText?: string;

  /** Specify whether the control is currently in warning state */
  warn?: boolean;

  /** Provide the text that is displayed when the control is in warning state */
  warnText?: string;

  /** Specify if the currently value is invalid. */
  invalid?: boolean;

  /** Message which is displayed if the value is invalid. */
  invalidText?: string;

  /** The `name` attribute for the `<input>` for selection. */
  name?: string;

  /** The orientation to lay out radio buttons. */
  orientation?: string;

  /** Controls the readonly state of the radio button group. */
  readOnly?: boolean;

  /** The `value` attribute for the `<input>` for selection. */
  value?: string;
};
