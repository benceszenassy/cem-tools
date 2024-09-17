export type CvToastNotificationProps = {
  /** Specify the caption */
  caption?: string;

  /** Provide a description for "close" icon button that can be read by screen readers */
  ariaLabel?: string;

  /** `true` to hide the close button. */
  hideCloseButton?: boolean;

  /** Provide a description for "status" icon that can be read by screen readers */
  statusIconDescription?: string;

  /** Notification kind. */
  kind?: string;

  /** Low contrast mode */
  lowContrast?: boolean;

  /** `true` if the notification should be open. */
  open?: boolean;

  /** Specify an optional duration the notification should be closed in */
  timeout?: number | null;

  /** The subtitle. */
  subtitle?: string;

  /** The title. */
  title?: string;
};
