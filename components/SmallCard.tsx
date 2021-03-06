import { Box, Image } from 'native-base'
import React, { ReactElement } from 'react'
import { TouchableOpacity } from 'react-native'
import ImagePlaceholder from './ImagePlaceholder'
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
        shadow={shadow ? 3 : 0}
        w={[160, 200]}
        bg="amber.600"
        rounded="md"
        overflow="hidden"
        {...props}
      >
        <Image
          w={[160, 200]}
          h={[100, 160]}
          src={image}
          alt={name}
          fallbackElement={<ImagePlaceholder size="small" />}
        />
        <Box
          p={4}
          pt={2}
        >
          <Text
            isTruncated
            noOfLines={2}
            color="white"
          >{name}
          </Text>
        </Box>
      </Box>
    </TouchableOpacity>
  )
}

export default SmallCard
