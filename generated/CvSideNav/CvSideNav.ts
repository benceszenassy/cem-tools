export type CvSideNavProps = {
  /** Collapse mode of the side nav. */
  collapseMode?: string;

  /** `true` to expand the side nav. */
  expanded?: boolean;

  /** If `true` will style the side nav to sit below the header */
  isNotChildOfHeader?: boolean;

  /** Specify if the side-nav will be persistent above the lg breakpoint */
  isNotPersistent?: boolean;
};
