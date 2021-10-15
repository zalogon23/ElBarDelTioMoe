import React, { ReactElement } from 'react'
import { Container as NativeContainer, ScrollView } from "native-base"

interface Props {
  children: ReactElement | ReactElement[],
  [props: string]: any
}

function Container({ children, ...props }: Props): ReactElement {
  return (
    <NativeContainer
      mx="auto"
      pb="4"
      flex={1}
      {...props}
    >
      <ScrollView
        pt={["10", "14"]}
        px="2"
        w="100%"
        flex={1}
      >
        {children}
      </ScrollView>
    </NativeContainer>
  )
}

export default Container
