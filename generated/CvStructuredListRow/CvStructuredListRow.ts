export type CvStructuredListRowProps = {
  /** `true` if this structured list row should be selectable and selected. */
  selected?: boolean;

  /** The `name` attribute for the `<input>` for selection.
If present, this structured list row will be a selectable one. */
  selectionName?: string;

  /** The `value` attribute for the `<input>` for selection. */
  selectionValue?: string;

  /** The content to put into the `<title>` attribute of the selection icon. */
  selectionIconTitle?: string;
};
