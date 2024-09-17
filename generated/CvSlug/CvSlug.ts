export type CvSlugProps = {
  /** Specify the correct translation of the AI text */
  aiText?: string;

  /** Specify additional text to be rendered next to the AI label in the inline variant */
  aiTextLabel?: string;

  /** Specify the type of Slug, from the following list of types: (default, inline) */
  kind?: string;

  /** Specify whether the revert button should be visible */
  revertActive?: boolean;

  /** Specify whether the revert button should be visible */
  revertLabel?: string;

  /** Slug size should be mini, 2xs, xs, sm, md, lg, xl. */
  size?: string;

  /** Specify the text that will be provided to the aria-label of the `Slug` button */
  slugLabel?: string;
};
