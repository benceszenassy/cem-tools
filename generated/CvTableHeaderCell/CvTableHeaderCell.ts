export type CvTableHeaderCellProps = {
  /** `true` if the table has expandable rows */
  isExpandable?: boolean;

  /** `true` if this table has selectable rows */
  isSelectable?: boolean;

  /** `true` if this table header column should be sortable */
  isSortable?: boolean;

  /** `true` if this table header cell is of a primary sorting column. */
  sortActive?: boolean;

  /** The table sort cycle in use. */
  sortCycle?: TABLE_SORT_CYCLE | undefined;

  /** The table sort direction.
If present, this table header cell will have a sorting UI. Choose between `ascending` or `descending`. */
  sortDirection?: TABLE_SORT_DIRECTION | undefined;
};
