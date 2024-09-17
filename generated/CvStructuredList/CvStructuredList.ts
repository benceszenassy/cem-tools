export type CvStructuredListProps = {
  /** The `name` attribute for the `<input>` for selection.
If present, this structured list will be a selectable one. */
  selectionName?: string;

  /** Specify if structured list is condensed, default is false */
  condensed?: boolean;

  /** Specify if structured list is flush, default is false */
  flush?: boolean;
};
