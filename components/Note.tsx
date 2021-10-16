import { Box } from 'native-base'
import React, { ReactElement } from 'react'

interface Props {
  children: string | ReactElement | ReactElement[],
  [props: string]: any
}

function Note({
  children,
  ...props
}: Props): ReactElement {
  return (
    <Box
      rounded="md"
      bg="white"
      py="6"
      px="4"
      w="100%"
      {...props}
    >
      {children}
    </Box>
  )
}

export default Note
