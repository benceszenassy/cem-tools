export type CvRadioButtonProps = {
  /** `true` if this radio button should be checked. */
  checked?: boolean;

  /** `true` if the radio button is used in a data table */
  dataTable?: boolean;

  /** `true` if the radio button item should be disabled. */
  disabledItem?: boolean;

  /** `true` if the radio button group should be disabled. */
  disabled?: boolean;

  /** `true` if the label should be hidden. */
  hideLabel?: boolean;

  /** Specify if the currently value is invalid. */
  invalid?: boolean;

  /** The label position. */
  labelPosition?: string;

  /** The label text. */
  labelText?: string;

  /** The `name` attribute for the `<input>` for selection. */
  name?: string;

  /** The orientation to lay out radio buttons. */
  orientation?: string;

  /** `true` if the radio button group should be disabled. */
  readOnly?: boolean;

  /** The `value` attribute for the `<input>` for selection. */
  value?: string;
};
