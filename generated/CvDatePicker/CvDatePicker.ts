export type CvDatePickerProps = {
  /** The Flatpickr instance. */
  calendar?: FlatpickrInstance | null;

  /** flatpickr prop passthrough. Allows the user to enter a date directly into the input field */
  allowInput?: boolean;

  /** flatpickr prop passthrough. Controls whether the calendar dropdown closes upon selection. */
  closeOnSelect?: boolean;

  /** The date format to let Flatpickr use. */
  dateFormat?: string;

  /** Controls the disabled state of the input */
  disabled?: boolean;

  /** The localization data. */
  locale?: FlatpickrLocale;

  /** The date range that a user can pick in calendar dropdown. */
  enabledRange?: string;

  /** The minimum date that a user can start picking from. */
  minDate?: string;

  /** The maximum date that a user can start picking from. */
  maxDate?: string;

  /** Name for the input in the `FormData` */
  name?: string;

  /** `true` if the date picker should be open. */
  open?: boolean;

  /** Specify if the component should be read-only */
  readonly?: boolean;

  /** The date(s) in ISO8601 format (date portion only), for range mode, '/' is used for separate start/end dates. */
  value?: string;
};
