export type CvSearchProps = {
  /** Specify an optional value for the autocomplete property on the underlying <input>,
defaults to "off" */
  autoComplete?: string;

  /** Specify a label to be read by screen readers on the "close" button */
  closeButtonLabelText?: string;

  /** `true` if the search box should be disabled. */
  disabled?: boolean;

  /** `true` if the search bar can be expandable */
  expandable?: boolean;

  /** `true` if the expandable search has been expanded */
  expanded?: boolean;

  /** The label text. */
  labelText?: string;

  /** The form name in `FormData`. */
  name?: string;

  /** Specify the role for the underlying <input>, defaults to searchbox */
  role?: string;

  /** The placeholder text. */
  placeholder?: string;

  /** The search box size. */
  size?: string;

  /** The `<input>` name. */
  type?: string;

  /** The value. */
  value?: string;
};
