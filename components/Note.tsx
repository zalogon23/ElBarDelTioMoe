import { Box } from 'native-base'
import { getStyleAndFilteredProps } from 'native-base/lib/typescript/theme/styled-system'
import React, { ReactElement } from 'react'

interface Props {
  children: string | ReactElement | ReactElement[],
  shadow?: boolean,
  [props: string]: any
}

function Note({
  shadow = false,
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
      style={shadow ? {
        shadowColor: "#0005",
        shadowOffset: {
          width: -6,
          height: 6
        }
      } : {}}
      {...props}
    >
      {children}
    </Box>
  )
}

export default Note
