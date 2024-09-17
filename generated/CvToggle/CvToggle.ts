export type CvToggleProps = {
  /** The text for the checked state. */
  labelA?: string;

  /** Hide label text. */
  hideLabel?: boolean;

  /** Read only boolean. */
  readOnly?: boolean;

  /** Toggle size. */
  size?: string;

  /** The text for the unchecked state. */
  labelB?: string;

  /** Specify whether the underlying input should be checked */
  checked?: boolean;

  /** Specify if checkbox is being used in a data table */
  dataTable?: boolean;

  /** Specify whether the Checkbox should be disabled */
  disabled?: boolean;

  /** Provide text for the form group for additional help */
  helperText?: string;

  /** Specify whether the checkbox should be present in the DOM,
but invisible and uninteractable. Used for data-table purposes. */
  hideCheckbox?: boolean;

  /** Specify whether the Checkbox is in an indeterminate state */
  indeterminate?: boolean;

  /** Provide a label to provide a description of the Checkbox input that you are
exposing to the user */
  labelText?: string;

  /** The form name. */
  name?: string;

  /** Specify whether the Checkbox is read-only */
  readonly?: boolean;

  /** Specify whether the Checkbox is currently invalid */
  invalid?: boolean;

  /** Provide the text that is displayed when the Checkbox is in an invalid state */
  invalidText?: string;

  /** Specify a title for the node for the Checkbox */
  title?: string;

  /** The value. */
  value?: string;

  /** Specify whether the Checkbox is in a warn state */
  warn?: boolean;

  /** Provide the text that is displayed when the Checkbox is in a warn state */
  warnText?: boolean;
};
