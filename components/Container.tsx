import React, { ReactElement } from 'react'
import { Box, Container as NativeContainer, ScrollView } from "native-base"

interface Props {
  children: ReactElement | ReactElement[],
  withoutScroll?: boolean,
  [props: string]: any
}

function Container({ withoutScroll = false, children, ...props }: Props): ReactElement {
  return (
    <>
      {
        withoutScroll
          ?
          Default()
          :
          <ScrollView
            px="2"
            w="100%"
            flex={1}
          >
            {Default()}
          </ScrollView>}
    </>
  )

  function Default(): ReactElement {
    return (
      <NativeContainer
        py={25}
        mx="auto"
        w="100%"
        flex={1}
        {...props}
      >
        {children}
      </NativeContainer>
    )
  }
}

export default Container
