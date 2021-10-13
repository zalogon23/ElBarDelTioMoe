import { Box, Image } from 'native-base'
import React, { ReactElement } from 'react'
import Text from './Text'

interface Props {
  src?: string,
  title?: string,
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
      h="14rem"
      w="11rem"
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
      <Box p="2">
        <Text
        color="white"
        >Tazon de Leche</Text>
      </Box>
    </Box>
  )
}

export default SmallCard
