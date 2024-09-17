export type CvTableExpandedRowProps = {
  /** The colspan. */
  colSpan?: number;

  /** `true` if the table row should be expanded. */
  expanded?: boolean;

  /** `true` if the table row should be filtered. */
  filtered?: boolean;

  /** `true` if the table row should be highlighted. */
  highlighted?: boolean;

  /** `true` if the previous table row has been selected */
  selected?: boolean;
};
