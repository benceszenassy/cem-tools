export type CvTagProps = {
  /** Text to show on filter tag "clear" buttons. Corresponds to the attribute with the same name */
  title?: string;

  /** `true` if the tag should be disabled */
  disabled?: boolean;

  /** Determine if is a filter/chip */
  filter?: boolean;

  /** `true` if the tag should be open. */
  open?: boolean;

  /** The size of the tag. */
  size?: string;

  /** The type of the tag. */
  type?: string;
};
