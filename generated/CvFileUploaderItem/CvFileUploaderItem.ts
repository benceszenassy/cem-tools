export type CvFileUploaderItemProps = {
  /** The `aria-label` attribute for the icon to delete this file uploader item. */
  iconDescription?: string;

  /** Controls the invalid state and visibility of the `validityMessage`. */
  invalid?: boolean;

  /** The size of this file uploader item. */
  size?: string;

  /** The state of this file uploader item. */
  state?: string;

  /** The error subject text. */
  errorSubject?: string;

  /** The error body text */
  errorBody?: string;
};
