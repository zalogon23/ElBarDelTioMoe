import { Box, Spinner } from 'native-base'
import React, { ReactElement } from 'react'

function Loading(): ReactElement {
  return (
    <Box
      flex={1}
    >
      <Spinner />
    </Box>
  )
}

export default Loading
