export type CvNumberInputProps = {
  /** The minimum value allowed in the input */
  min?: string;

  /** The maximum value allowed in the input */
  max?: string;

  /** The amount the value should increase or decrease by */
  step?: string;

  /** Aria text for the button that increments the value */
  incrementButtonAssistiveText?: string;

  /** Aria text for the button that decrements the value */
  decrementButtonAssistiveText?: string;

  /** Specify whether you want the steppers to be hidden */
  hideSteppers?: boolean;

  /** `true` to allow empty string. */
  allowEmpty?: boolean;

  /** The input box size. */
  size?: string;

  /** `true` to show the UI of the invalid state. */
  invalid?: boolean;

  /** `true` if the value is required. */
  required?: boolean;

  /** The special validity message for `required`. */
  requiredValidityMessage?: string;

  /** The validity message. */
  validityMessage?: string;

  /** The value. */
  value?: string;

  /** May be any of the standard HTML autocomplete options */
  autocomplete?: string;

  /** Sets the input to be focussed automatically on page load. Defaults to false */
  autofocus?: boolean;

  /** Controls the disabled state of the input */
  disabled?: boolean;

  /** Specify whether to display the character counter */
  enableCounter?: boolean;

  /** The helper text. */
  helperText?: string;

  /** Message which is displayed if the value is invalid. */
  invalidText?: string;

  /** Max character count allowed for input. This is needed in order for enableCounter to display */
  maxCount?: string;

  /** Specify whether the control is currently in warning state */
  warn?: boolean;

  /** Provide the text that is displayed when the control is in warning state */
  warnText?: string;

  /** Specify whether you want the underlying label to be visually hidden */
  hideLabel?: boolean;

  /** Generic label that will be used as the textual representation of what this field is for */
  label?: string;

  /** Name for the input in the `FormData` */
  name?: string;

  /** Pattern to validate the input against for HTML validity checking */
  pattern?: string;

  /** Value to display when the input has an empty `value` */
  placeholder?: string;

  /** Specify if the component should be read-only */
  readonly?: boolean;

  /** "Hide password" tooltip text on password visibility toggle */
  hidePasswordLabel?: string;

  /** "Show password" tooltip text on password visibility toggle */
  showPasswordLabel?: string;

  /** Boolean property to render password visibility toggle */
  showPasswordVisibilityToggle?: boolean;

  /** true to use the inline version. */
  inline?: boolean;

  /** Specify the alignment of the tooltip to the icon-only button.
Can be one of: start, center, or end. */
  tooltipAlignment?: string;

  /** Specify the direction of the tooltip for icon-only buttons.
Can be either top, right, bottom, or left. */
  tooltipDirection?: string;

  /** The type of the input. Can be one of the types listed in the INPUT_TYPE enum */
  type?: string;
};
