export type CvAccordionSkeletonProps = {
  /** Specify the alignment of the accordion heading title and chevron */
  alignment?: string;

  /** Set number of items to render */
  count?: number;

  /** Specify whether Accordion text should be flush, default is false, does not work with align="start" */
  isFlush?: boolean;

  /** `true` if the first accordion item should be open. */
  open?: boolean;
};
