export type CvAccordionProps = {
  /** Accordion size should be sm, md, lg. */
  size?: string;

  /** Specify the alignment of the accordion heading title and chevron */
  alignment?: string;

  /** Specify whether Accordion text should be flush, default is false, does not work with align="start" */
  isFlush?: boolean;
};
