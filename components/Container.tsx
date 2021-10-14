import React, { ReactElement } from 'react'
import { Container as NativeContainer } from "native-base"

interface Props {
  children: ReactElement | ReactElement[],
  [props: string]: any
}

function Container({ children, ...props }: Props): ReactElement {
  return (
    <NativeContainer
      mx="auto"
      pt="10"
      w="100%"
      flexGrow={1}
      {...props}
    >
      {children}
    </NativeContainer>
  )
}

export default Container
