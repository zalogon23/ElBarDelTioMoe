import { Box, Image } from 'native-base'
import React, { ReactElement } from 'react'
import Heading from './Heading'
import Text from './Text'

export interface BigCardProps {
  src?: string,
  title?: string,
  description?: string
}

interface Props extends BigCardProps {
  [props: string]: any
}

function Bigcard({ ...props }: Props): ReactElement {
  return (
    <Box
      style={{
        shadowColor: "#0005",
        shadowOffset: {
          width: -6,
          height: 6
        }
      }}
      w="100%"
      maxWidth="30rem"
      bg="amber.600"
      rounded="md"
      overflow="hidden"
      {...props}
    >
      <Image
        w="100%"
        h={["14rem", "20rem"]}
        src="https://i0.wp.com/hornomx.com/wp-content/uploads/2020/12/hot-chocolate-recipe-hornomx-side.jpg?resize=1024%2C683&ssl=1"
      />
      <Box 
      p="6"
      pt="4"
      >
        <Heading
        isTruncated
        noOfLines="2"
          color="black"
          mb="4"
        >Tazon de Leche con un poco de cocoa y nesquik de yapa maldito mamon
        </Heading>
        <Text
        isTruncated
        noOfLines="4"
        >
          Históricamente uno de los platos favoritos del querido Tom de Tom y Jerry. Se
          lo recuerda por ser el mas mamalon de todos los gatos del barrio. Quizá sea por esto que
          gano un Grammy al mejor trapero del mundo, un terrible mamón.
        </Text>
      </Box>
    </Box>
  )
}

export default Bigcard
