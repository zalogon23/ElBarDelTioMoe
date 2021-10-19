import React, { ReactElement } from "react";
import { Box, Image } from "native-base";

interface Props {
  image: string,
  alt: string,
  [props: string]: any
}

export default function BeverageImage({ image, alt, ...props }: Props): ReactElement {
  return (
    <Box
      shadow={3}
      rounded="md"
      alignSelf="center"
      w="100%"
      h={[180, 320]}
      {...props}
    >
      <Image
        w="100%"
        h={[180, 320]}
        rounded="md"
        alt={alt}
        source={{ uri: image }}
      />
    </Box>
  )
}