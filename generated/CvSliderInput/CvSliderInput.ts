export type CvSliderInputProps = {
  /** `true` if the input should be disabled. */
  disabled?: boolean;

  /** true to specify if the control is invalid. */
  invalid?: boolean;

  /** true to specify if the control should display warn icon and text. */
  warn?: boolean;

  /** The maximum value. */
  max?: string;

  /** The minimum value. */
  min?: string;

  /** The snapping step of the value. */
  step?: string;

  /** The type of the `<input>`. */
  type?: string;

  /** The value. */
  value?: number;

  /** true` if the input should be readonly. */
  readonly?: boolean;
};
