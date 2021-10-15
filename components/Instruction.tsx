import React, { ReactElement } from 'react'
import { TouchableOpacity } from 'react-native'
import Note from './Note'
import Text from './Text'

interface Props {
  content: string,
  done?: boolean,
  onPress?: () => any | undefined,
  [props: string]: any
}

function Instruction({
  content,
  done = false,
  onPress = undefined,
  ...props
}: Props): ReactElement {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <Note
        opacity={done ? 0.5 : 1}
        px="3"
        py="3"
        {...props}
      >
        <Text>{content}</Text>
      </Note>
    </TouchableOpacity>
  )
}

export default Instruction
