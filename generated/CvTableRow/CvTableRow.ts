export type CvTableRowProps = {
  /** `true` if this table should support batch expansion */
  batchExpansion?: boolean;

  /** `true` if this table row should be disabled. */
  disabled?: boolean;

  /** `true` if this table row should be filtered out. */
  filtered?: boolean;

  /** Specify whether the checkbox should be present in the DOM,
but invisible and uninteractable. */
  hideCheckbox?: boolean;

  /** `true` if the table row should be highlighted. */
  highlighted?: boolean;

  /** Specify whether the overflow menu (if it exists) should be shown always, or only on hover */
  overflowMenuOnHover?: boolean;

  /** `true` if this table row should be selected. */
  selected?: boolean;

  /** The `aria-label` attribute for the `<label>` for selection. */
  selectionLabel?: string;

  /** The `name` attribute for the `<input>` for selection.
If present, this table row will be a selectable one. */
  selectionName?: string;

  /** The `value` attribute for the `<input>` for selection. */
  selectionValue?: string;
};
