import React, { ReactElement } from 'react';
import { Text as NativeText } from "native-base";
import styling from '../lib/styling';

interface Props {
  children: string | ReactElement | ReactElement[],
  [props: string]: any
}

function Text({ children, ...props }: Props): ReactElement {
  return (
    <NativeText
      color="gray.500"
      fontFamily="Montserrat-Regular"
      lineHeight={styling.lineHeight.medium}
      fontSize={styling.font.medium}
      {...props}
    >
      {children}
    </NativeText>
  )
}

export default Text
