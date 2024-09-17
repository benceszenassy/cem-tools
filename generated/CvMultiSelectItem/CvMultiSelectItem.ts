export type CvMultiSelectItemProps = {
  /** The property to hide when item is filtered from input */
  filtered?: string;

  /** The `name` attribute for the `<input>` for selection. */
  selectionName?: string;

  /** `true` if this dropdown item should be disabled. */
  disabled?: boolean;

  /** Dropdown size. */
  size?: string;

  /** The `value` attribute that is set to the parent `<cds-dropdown>` when this dropdown item is selected. */
  value?: string;
};
