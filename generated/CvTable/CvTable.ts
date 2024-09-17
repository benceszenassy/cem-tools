export type CvTableProps = {
  /** `true` if this table should support batch expansion */
  batchExpansion?: boolean;

  /** The g11n collator to use. */
  collator?: string;

  /** Specify whether the rows should be able to be expandable */
  expandable?: boolean;

  /** The method used when filtering the table with the search bar.
Can be replaced with custom method. */
  filterRows?: string;

  /** The total headers */
  headerCount?: number;

  /** `true` if this table contains selectable rows */
  isSelectable?: boolean;

  /** `true` if this table should support sorting. */
  isSortable?: boolean;

  /** The table size. */
  locale?: string;

  /** Specify whether the overflow menu (if it exists) should be shown always, or only on hover */
  overflowMenuOnHover?: boolean;

  /** Specify whether the control should be a radio button or inline checkbox */
  radio?: boolean;

  /** The table size. */
  size?: string;

  /** If true, will use a width of 'auto' instead of 100% */
  useStaticWidth?: boolean;

  /** true to add useZebraStyles striping. */
  useZebraStyles?: boolean;

  /** true if slugs are added in the rows */
  withRowSlugs?: boolean;
};
