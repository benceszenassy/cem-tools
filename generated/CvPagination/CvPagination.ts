export type CvPaginationProps = {
  /** The assistive text for the button to go to previous page. */
  backwardText?: string;

  /** The current page */
  page?: number;

  /** The formatter for the assistive text for screen readers to announce.
Should be changed upon the locale the UI is rendered with. */
  formatLabelText?: string;

  /** The formatter, used with determinate the total pages. Should be changed upon the locale the UI is rendered with. */
  formatStatusWithDeterminateTotal?: string;

  /** The formatter, used with indeterminate the total pages. Should be changed upon the locale the UI is rendered with. */
  formatStatusWithIndeterminateTotal?: string;

  /** The formatter for the text next to the select box. Should be changed upon the locale the UI is rendered with. */
  formatSupplementalText?: string;

  /** `true` to explicitly state that user is at the last page. */
  isLastPage?: boolean;

  /** The translatable text indicating the number of items per page. */
  itemsPerPageText?: string;

  /** `true` if the pagination UI should be disabled. */
  disabled?: boolean;

  /** The assistive text for the button to go to next page. */
  forwardText?: string;

  /** true if the select box to change the page should be disabled. */
  pageInputDisabled?: string;

  /** Number of items per page. */
  pageSize?: number;

  /** true if the select box to change the items per page should be disabled. */
  pageSizeInputDisabled?: string;

  /** The label text for the UI to select page size. */
  pageSizeLabelText?: string;

  /** true if the total number of items is unknown. */
  pagesUnknown?: boolean;

  /** Specify the size of the Pagination. */
  size?: string;

  /** The row number where current page start with, index that starts with zero. */
  start?: number;

  /** The number of total items. */
  totalItems?: number;

  /** The number of total pages. */
  totalPages?: number;
};
