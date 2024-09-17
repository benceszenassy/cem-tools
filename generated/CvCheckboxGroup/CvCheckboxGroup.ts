export type CvCheckboxGroupProps = {
  /** fieldset `aria-labelledby` */
  ariaLabelledBy?: string;

  /** Specify whether the form group is currently disabled */
  disabled?: string;

  /** Provide text for the form group for additional help */
  helperText?: string;

  /** Specify whether the form group is currently invalid */
  invalid?: string;

  /** Provide the text that is displayed when the form group is in an invalid state */
  invalidText?: string;

  /** Provide id for the fieldset <legend> which corresponds to the fieldset
`aria-labelledby` */
  legendId?: string;

  /** Provide the text to be rendered inside of the fieldset <legend> */
  legendText?: string;

  /** Whether the CheckboxGroup should be read-only */
  readonly?: boolean;

  /** Specify whether the form group is currently in warning state */
  warn?: boolean;

  /** Provide the text that is displayed when the form group is in warning state */
  warnText?: string;
};
