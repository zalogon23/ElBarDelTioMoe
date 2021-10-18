import React, { ReactElement } from 'react'
import { Box, Container as NativeContainer, ScrollView } from "native-base"

interface Props {
  children: ReactElement | ReactElement[],
  withoutScroll?: boolean,
  [props: string]: any
}

function Container({ withoutScroll = false, children, ...props }: Props): ReactElement {
  return (
    <NativeContainer
      mx="auto"
      pb="4"
      w="100%"
      flex={withoutScroll ? undefined : 1}
      {...props}
    >{
        withoutScroll
          ?
          <Box
            pt={["10", "14"]}
            px="2"
            w="100%"
          >
            {children}
          </Box>
          :
          <ScrollView
            pt={["10", "14"]}
            px="2"
            w="100%"
            flex={1}
          >
            {children}
          </ScrollView>}
    </NativeContainer>
  )
}

export default Container
