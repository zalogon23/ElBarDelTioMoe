import { Image } from 'native-base'
import React, { ReactElement } from 'react'

interface Props {
  source: any,
  alt: string
}

function Background({ source, alt }: Props): ReactElement {
  return (
    <Image
      source={source}
      position="absolute"
      zIndex={-1}
      top={0}
      left={0}
      alt={alt}
      w="100%"
      h="100%"
    />
  )
}

export default Background
