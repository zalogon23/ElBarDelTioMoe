import React, { ReactElement } from 'react'
import { TouchableOpacity } from 'react-native'
import Note from './Note'
import Text from './Text'

interface Props {
  content: string,
  done?: boolean,
  donable: boolean,
  onPress?: () => any | undefined,
  [props: string]: any
}

function LineCard({
  donable,
  content,
  done = false,
  onPress = undefined,
  ...props
}: Props): ReactElement {
  if (donable) {
    return (
      <TouchableOpacity
        onPress={onPress}
      >
        <Line />
      </TouchableOpacity>
    )
  } else {
    return (<Line />)
  }

  function Line() {
    return (
      <Note
        opacity={done ? 0.7 : 1}
        px="3"
        py="3"
        {...props}
      >
        <Text>{content}</Text>
      </Note>
    )
  }
}

export default LineCard
