export type CvModalProps = {
  /** Specify whether the Modal is displaying an alert, error or warning.
Should go hand in hand with the danger prop. */
  alert?: boolean;

  /** Specify text for the accessibility label of the header */
  ariaLabel?: string;

  /** The additional CSS class names for the container <div> of the element. */
  containerClass?: string;

  /** Specify whether or not the Modal content should have any inner padding. */
  fullWidth?: boolean;

  /** Specify whether the modal contains scrolling content */
  hasScrollingContent?: boolean;

  /** `true` if the modal should be open. */
  open?: boolean;

  /** Modal size. */
  size?: string;

  /** Prevent closing on click outside of modal */
  preventCloseOnClickOutside?: boolean;

  /** Prevent the modal from closing after clicking the close button */
  preventClose?: boolean;
};
