export type CvCEDemoFileUploaderProps = {
  /** The file types the file input should accept, separated by space. */
  accept?: string;

  /** `true` if the drop container should be disabled. */
  button?: boolean;

  /** Button kind. */
  buttonKind?: string;

  /** Button label. */
  buttonLabel?: string;

  /** `true` if the drop container should be disabled. */
  disabled?: boolean;

  /** Icon description. */
  iconDescription?: string;

  /** The input name. */
  inputName?: string;

  /** The label description text. */
  labelDescription?: string;

  /** The label title. */
  labelTitle?: string;

  /** `true` if the drop container should accept more than one files at once.
Note that even with `false` set here, user _can_ select multiple files one by one. */
  multiple?: boolean;

  /** The size of the button item. */
  size?: string;

  /** The state of this file uploader item. */
  inputState?: string;
};
