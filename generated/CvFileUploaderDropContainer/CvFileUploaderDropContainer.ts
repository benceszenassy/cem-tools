export type CvFileUploaderDropContainerProps = {
  /** The file types the file input should accept, separated by space. */
  accept?: string;

  /** `true` if this drop container should be disabled. */
  disabled?: boolean;

  /** `true` if this drop container should accept more than one files at once.
Note that even with `false` set here, user _can_ select multiple files one by one. */
  multiple?: boolean;

  /** The name of the input. */
  name?: string;

  /** The shadow DOM slot to put this drop container in. */
  slot?: string;
};
