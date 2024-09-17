export type CvSelectProps = {
  /** The count of child `<option>`s.
If the placeholder is in effect, it includes the `<option>` for the placeholder. */
  length?: string;

  /** The child `<option>`s. */
  options?: string;

  /** This form control's type. */
  type?: string;

  /** Sets the select to be focussed automatically on page load. Defaults to false */
  autofocus?: boolean;

  /** Controls the disabled state of the select */
  disabled?: boolean;

  /** The helper text. */
  helperText?: string;

  /** Specify whether the label should be hidden, or not */
  hideLabel?: boolean;

  /** ID to link the `label` and `select` */
  id?: string;

  /** Specify if the currently value is invalid. */
  invalid?: boolean;

  /** Message which is displayed if the value is invalid. */
  invalidText?: string;

  /** Specify if the currently value is warn. */
  warn?: boolean;

  /** Message which is displayed if the value is warn. */
  warnText?: string;

  /** The label text. */
  labelText?: string;

  /** Specify whether you want the inline version of this control */
  inline?: boolean;

  /** `true` to enable multiple selection. */
  multiple?: string;

  /** Name for the select in the `FormData` */
  name?: string;

  /** Pattern to validate the select against for HTML validity checking */
  pattern?: string;

  /** Value to display when the select has an empty `value` */
  placeholder?: string;

  /** Controls the readonly state of the select */
  readonly?: boolean;

  /** Boolean property to set the required status */
  required?: boolean;

  /** The special validity message for `required`. */
  requiredValidityMessage?: string;

  /** The selected index. */
  selectedIndex?: string;

  /** The input box size. */
  size?: string;

  /** The value of the text area. */
  value?: string;
};
