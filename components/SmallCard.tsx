import { Box, Image } from 'native-base'
import React, { ReactElement } from 'react'
import Text from './Text'

export interface SmallCardProps {
  src?: string,
  title?: string,
}

interface Props extends SmallCardProps {
  [props: string]: any
}

function SmallCard({ ...props }: Props): ReactElement {
  return (
    <Box
      style={{
        shadowColor: "#0005",
        shadowOffset: {
          width: -6,
          height: 6
        }
      }}
      w="13rem"
      h={["14rem", "16rem"]}
      bg="amber.600"
      rounded="md"
      overflow="hidden"
      {...props}
    >
      <Image
        w="100%"
        h="10rem"
        src="https://i0.wp.com/hornomx.com/wp-content/uploads/2020/12/hot-chocolate-recipe-hornomx-side.jpg?resize=1024%2C683&ssl=1"
      />
      <Box
        p="4"
        pt="2"
      >
        <Text
          isTruncated
          noOfLines="2"
          color="white"
        >Tazon de Leche con algunos toques de jengibre</Text>
      </Box>
    </Box>
  )
}

export default SmallCard
