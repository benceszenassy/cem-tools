export type CvSkeletonTextProps = {
  /** Specify optional classes to be added to your SkeletonText */
  optionalClasses?: string;

  /** The type of skeleton text. */
  type?: string;

  /** width (in px or %) of single line of text or max-width of paragraph lines */
  width?: string;

  /** will generate multiple lines of text */
  paragraph?: boolean;

  /** the number of lines in a paragraph */
  lineCount?: number;
};
