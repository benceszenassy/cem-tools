export type CvComboBoxProps = {
  /** The `aria-label` attribute for the icon to clear selection. */
  clearSelectionLabel?: string;

  /** The `aria-label` attribute for the `<input>` for filtering. */
  inputLabel?: string;

  /** The custom item matching callback. */
  itemMatches?: (item: CDSComboBoxItem, queryText: string) => boolean;

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

  /** 'aria-label' of the ListBox component.
Specify a label to be read by screen readers on the container node */
  ariaLabel?: string;

  /** Specify the direction of the dropdown. Can be either top or bottom. */
  direction?: string;

  /** `true` if this dropdown should be disabled. */
  disabled?: boolean;

  /** The helper text. */
  helperText?: string;

  /** Specify whether the title text should be hidden or not */
  hideLabel?: boolean;

  /** Message which is displayed if the value is invalid. */
  invalidText?: string;

  /** Provide the title text that will be read by a screen reader when visiting this control */
  titleText?: string;

  /** Name for the dropdown in the `FormData` */
  name?: string;

  /** `true` if this dropdown should be open. */
  open?: boolean;

  /** Whether or not the Dropdown is readonly */
  readOnly?: boolean;

  /** Dropdown size. */
  size?: string;

  /** The `aria-label` attribute for the UI indicating the closed state. */
  toggleLabelClosed?: string;

  /** The `aria-label` attribute for the UI indicating the open state. */
  toggleLabelOpen?: string;

  /** Generic label that will be used as the textual representation of what this field is for */
  label?: string;

  /** `true` if this dropdown should use the inline UI variant. */
  type?: string;

  /** Specify whether the control is currently in warning state */
  warn?: boolean;

  /** Provide the text that is displayed when the control is in warning state */
  warnText?: string;
};
