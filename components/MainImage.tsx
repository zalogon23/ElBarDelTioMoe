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
      style={{
        shadowColor: "#0005",
        shadowOffset: {
          width: -5,
          height: 5
        }
      }}
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