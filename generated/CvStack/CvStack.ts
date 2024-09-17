export type CvStackProps = {
  /** Specify the orientation of them items in the Stack */
  orientation?: string;

  /** Provide either a custom value or a step from the spacing scale to be used
as the gap in the layout */
  gap?: string;

  /** Turn on when passing in custom value to 'gap' attribute (ie. gap="2rem") */
  useCustomGapValue?: boolean;
};
