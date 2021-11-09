import { Box } from 'native-base'
import React, { ReactElement } from 'react'

interface Props {
  size: "big" | "small",
  [props: string]: any
}

function ImagePlaceholder({ size, ...props }: Props): ReactElement {
  return (
    <Box
      bg="black"
      w={size === "small" ? [160, 200] : [220, 400]}
      h={size === "small" ? [100, 160] : [200, 320]}
      {...props}
    />
  )
}

export default ImagePlaceholder
