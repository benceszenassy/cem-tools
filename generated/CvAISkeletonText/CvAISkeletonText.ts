export type CvAISkeletonTextProps = {
  /** Generates skeleton text at a larger size. */
  heading?: boolean;

  /** width (in px or %) of single line of text or max-width of paragraph lines */
  width?: string;

  /** will generate multiple lines of text */
  paragraph?: boolean;

  /** the number of lines in a paragraph */
  lineCount?: number;
};
