export type CvTabsProps = {
  /** An assistive text for screen reader to announce, telling the open state. */
  selectingItemsAssistiveText?: string;

  /** An assistive text for screen reader to announce, telling that an item is selected. */
  selectedItemAssistiveText?: string;

  /** The content of the trigger button for narrow mode. */
  triggerContent?: string;

  /** Tabs type. */
  type?: string;

  /** The value of the selected item. */
  value?: string;

  /** Content switcher size. */
  size?: string;

  /** Icon only. */
  iconOnly?: boolean;
};
