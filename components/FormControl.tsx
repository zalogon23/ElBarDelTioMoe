import React, { ReactElement } from 'react'
import { FormControl as NativeFormControl, Input, Stack } from "native-base"
import styling from '../lib/styling'

interface Props {
  label: string,
  helper: string,
  errorMessage: string,
  [props: string]: any
}

function FormControl({
  label,
  helper,
  errorMessage,
  ...props
}: Props): ReactElement {
  return (
    <NativeFormControl
      isRequired
      mb="4"
    >
      <Stack
        space="2"
      >
        <NativeFormControl.Label
          fontSize={styling.font.medium}
        >{label}</NativeFormControl.Label>
        <Input
          fontSize={styling.font.medium}
          {...props} />
        <NativeFormControl.HelperText
          fontSize={styling.font.medium}
        >{helper}</NativeFormControl.HelperText>
        <NativeFormControl.ErrorMessage
          fontSize={styling.font.medium}
        >{errorMessage}</NativeFormControl.ErrorMessage>
      </Stack>
    </NativeFormControl>
  )
}

export default FormControl
