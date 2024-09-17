export type CvProgressStepProps = {
  /** `true` if the progress step should be disabled. */
  disabled?: boolean;

  /** The a11y text for the icon. */
  iconLabel?: string;

  /** The primary progress label. */
  labelText?: string;

  /** The secondary progress label. */
  secondaryLabelText?: string;

  /** The progress state. */
  state?: string;
};
