export type CvTableSkeletonProps = {
  /** Optionally specify whether you want the Skeleton to be rendered as a compact DataTable */
  compact?: boolean;

  /** Specify the number of columns that you want to render in the skeleton state */
  columnCount?: number;

  /** Specify the number of rows that you want to render in the skeleton state */
  rowCount?: number;

  /** Specify if the table header should be rendered as part of the skeleton. */
  showHeader?: boolean;

  /** Specify if the table toolbar should be rendered as part of the skeleton. */
  showToolbar?: boolean;

  /** true to add useZebraStyles striping. */
  zebra?: boolean;
};
