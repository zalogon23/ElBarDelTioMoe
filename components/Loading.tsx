import { Box, Center, Spinner } from 'native-base'
import React, { ReactElement } from 'react'

function Loading(): ReactElement {
  return (
    <Center
      flex={1}
      width="100%"
      height="100%"
    >
      <Spinner />
    </Center>
  )
}

export default Loading
