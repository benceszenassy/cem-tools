export type CvTableBatchActionsProps = {
  /** `true` if this batch actions bar should be active. */
  active?: boolean;

  /** The formatter for selected items. Should be changed upon the locale the UI is rendered with. */
  formatSelectedItemsCount?: string;

  /** Numeric representation of the total number of items selected in a table.
This number is used to derive the selection message. */
  selectedRowsCount?: number;
};
