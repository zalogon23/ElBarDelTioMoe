import { FontAwesome } from '@expo/vector-icons'
import { Icon } from 'native-base'
import React, { ReactElement } from 'react'

interface Props {
  name: string,
  [props: string]: any
}

function FontAwesomeIcon({ name, ...props }: Props): ReactElement {
  return (
    <Icon
      as={FontAwesome}
      name={name}
      {...props}
    />
  )
}

export default FontAwesomeIcon
