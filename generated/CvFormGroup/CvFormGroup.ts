export type CvFormGroupProps = {
  /** Specify whether the Form Group is invalid */
  invalid?: boolean;

  /** Provide id for the fieldset <legend> which corresponds to the fieldset
`aria-labelledby` */
  legendId?: string;

  /** Provide the text to be rendered inside of the fieldset <legend> */
  legendText?: string;

  /** Specify whether the message should be displayed in the Form Group */
  message?: boolean;

  /** Provide the text for the message in the Form Group */
  messageText?: string;
};
