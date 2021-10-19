import { Box, Image } from 'native-base'
import React, { ReactElement } from 'react'
import { TouchableOpacity } from 'react-native'
import Heading from './Heading'
import Text from './Text'

export interface BigCardProps {
  image: string,
  name: string,
  description: string,
  onPress?: () => any
}

interface Props extends BigCardProps {
  [props: string]: any
}

function Bigcard({
  name,
  onPress = () => { },
  description,
  image,
  ...props }: Props): ReactElement {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <Box
        pointerEvents="none"
        style={{
          shadowColor: "#0005",
          shadowOffset: {
            width: -6,
            height: 6
          }
        }}
        w={220}
        bg="amber.600"
        rounded="md"
        overflow="hidden"
        {...props}
      >
        <Image
          w={220}
          h={200}
          src={image}
          alt={description}
        />
        <Box
          p={6}
          pt={4}
        >
          <Heading
            isTruncated
            noOfLines={2}
            color="black"
            mb={4}
          >{name}
          </Heading>
          <Text
            color="white"
            isTruncated
            noOfLines={4}
          >
            {description}
          </Text>
        </Box>
      </Box>
    </TouchableOpacity>
  )
}

export default Bigcard
