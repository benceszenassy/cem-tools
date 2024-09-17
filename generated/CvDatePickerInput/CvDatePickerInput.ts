export type CvDatePickerInputProps = {
  /** The `<input>`, used for Flatpickr to grab. */
  input?: HTMLInputElement;

  /** The color scheme. */
  colorScheme?: string;

  /** `true` if the check box should be disabled. */
  disabled?: boolean;

  /** `true` if the label should be hidden. */
  hideLabel?: boolean;

  /** Specify whether the control is currently in warning state */
  warn?: boolean;

  /** Provide the text that is displayed when the control is in warning state */
  warnText?: string;

  /** Message which is displayed if the value is invalid. */
  invalidText?: string;

  /** Controls the invalid state and visibility of the `validityMessage`. */
  invalid?: boolean;

  /** Date picker input kind. */
  kind?: string;

  /** The label text. */
  labelText?: string;

  /** The `pattern` attribute for the `<input>` in the shadow DOM. */
  pattern?: string;

  /** The placeholder text. */
  placeholder?: string;

  /** Specify if the component should be read-only */
  readonly?: boolean;

  /** `true` if the value is required. */
  required?: boolean;

  /** Vertical size of this date picker input. */
  size?: string;

  /** true to use the short version. */
  short?: boolean;

  /** The `type` attribute for the `<input>` in the shadow DOM. */
  type?: string;

  /** The value. */
  value?: string;
};
