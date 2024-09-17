export type CvSidePanelProps = {
  /** Determines if the title will animate on scroll */
  animateTitle?: boolean;

  /** Sets the close button icon description */
  closeIconDescription?: string;

  /** Determines whether the side panel should render the condensed version (affects action buttons primarily) */
  condensedActions?: boolean;

  /** Sets the current step of the side panel */
  currentStep?: string;

  /** Determines whether the side panel should render with an overlay */
  includeOverlay?: boolean;

  /** Sets the label text which will display above the title text */
  labelText?: string;

  /** Sets the icon description for the navigation back icon button */
  navigationBackIconDescription?: string;

  /** `true` if the side-panel should be open. */
  open?: boolean;

  /** SidePanel placement. */
  placement?: string;

  /** Prevent closing on click outside of side-panel */
  preventCloseOnClickOutside?: boolean;

  /** The initial location of focus in the side panel */
  selectorInitialFocus?: string;

  /** Selector for page content, used to push content to side except */
  selectorPageContent?: string;

  /** SidePanel size. */
  size?: string;

  /** Determines if this panel slides in */
  slideIn?: boolean;

  /** Sets the title text */
  title?: string;
};
