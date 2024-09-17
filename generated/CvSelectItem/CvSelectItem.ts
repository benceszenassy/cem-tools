export type CvSelectItemProps = {
  /** `true` to disable this option. */
  disabled?: boolean;

  /** The label. If this is not specified, the child text content is used. */
  label?: string;

  /** `true` to select this option. */
  selected?: boolean;

  /** The value. */
  value?: string;
};
