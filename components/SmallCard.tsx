import { Box, Image } from 'native-base'
import React, { ReactElement } from 'react'
import { TouchableOpacity } from 'react-native'
import Text from './Text'

export interface SmallCardProps {
  image: string,
  name: string,
  shadow?: boolean,
  onPress?: () => any
}

interface Props extends SmallCardProps {
  [props: string]: any
}

function SmallCard({
  name,
  image,
  shadow = true,
  onPress = () => { },
  ...props }: Props): ReactElement {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <Box
        style={
          shadow
            ?
            {
              shadowColor: "#0005",
              shadowOffset: {
                width: -6,
                height: 6
              }
            }
            :
            {}
        }
        w="12rem"
        h={["14rem", "16rem"]}
        bg="amber.600"
        rounded="md"
        overflow="hidden"
        {...props}
      >
        <Image
          w="100%"
          h="10rem"
          src={image}
          alt={name}
        />
        <Box
          p="4"
          pt="2"
        >
          <Text
            isTruncated
            noOfLines="2"
            color="white"
          >{name}
          </Text>
        </Box>
      </Box>
    </TouchableOpacity>
  )
}

export default SmallCard
