import React, { ReactElement } from 'react';
import { Heading as NativeHeading } from "native-base";
import styling from '../lib/styling';

interface Props {
  children: string | ReactElement | ReactElement[],
  [props: string]: any
}

function Heading({ children, ...props }: Props): ReactElement {
  return (
    <NativeHeading
      color="black"
      fontFamily="Montserrat-Bold"
      lineHeight={styling.lineHeight.big}
      fontSize={styling.font.big}
      {...props}
    >
      {children}
    </NativeHeading>
  )
}

export default Heading
