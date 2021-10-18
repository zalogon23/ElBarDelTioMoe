import React, { ReactElement } from "react";
import { Box, Image } from "native-base";

interface Props {
  image: string,
  [props: string]: any
}

export default function BeverageImage({ image, ...props }: Props): ReactElement {
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
      h={["15rem", "25rem"]}
      {...props}
    >
      <Image
        w="100%"
        h={["15rem", "25rem"]}
        rounded="md"
        source={{ uri: image }}
      />
    </Box>
  )
}