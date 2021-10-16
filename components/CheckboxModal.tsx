import { Checkbox, Modal } from 'native-base'
import React, { ReactElement, useEffect, useState } from 'react'
import ButtonWithIcon from './ButtonWithIcon'
import Heading from './Heading'
import Note from './Note'
import Text from './Text'

interface Props {
  values: any[],
  open: boolean,
  setOpen: (open: boolean) => any,
  alreadyCheckedValues?: any[],
  action: (values: any[]) => any
}

function CheckboxModal({
  alreadyCheckedValues = [],
  values,
  open,
  setOpen,
  action
}: Props): ReactElement {
  const [checkedValues, setCheckedValues] = useState(alreadyCheckedValues);

  //You need to keep checkedValues updated because it doesn't update when 'alreadyCheckedValues' does.
  useEffect(() => {
    setCheckedValues(alreadyCheckedValues)
  }, [alreadyCheckedValues])
  return (
    <Modal
      isOpen={open}
      onClose={() => setOpen(false)}
    >
      <Modal.Content
        maxW="450px"
      >
        <Modal.CloseButton />
        <Modal.Header
          px="5"
        >
          <Heading>Elige filtros</Heading>
        </Modal.Header>
        <Modal.Body
          px="5"
        >
          {
            values.map(value => (
              <Note
                key={value}
                py="3"
                px="0"
                mb="2"
                alignItems="center"
              >
                <Text
                  pr="2"
                >{value}</Text>
                <Checkbox
                  isChecked={checkedValues.includes(value)}
                  onChange={checked => updateCheckedValues(checked, value)}
                  value={value}
                />
              </Note>
            ))
          }
        </Modal.Body>
        <Modal.Footer>
          <ButtonWithIcon
            color="amber.400"
            focusColor="amber.600"
            dir="right"
            onPress={() => action(checkedValues)}
            name="arrow-right"
            size="small"
          >
            Elige filtros
          </ButtonWithIcon>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )

  function updateCheckedValues(checked: boolean, value: string) {
    if (checked) {
      setCheckedValues([...checkedValues, value])
    } else {
      setCheckedValues(checkedValues.filter(val => val !== value))
    }
  }
}

export default CheckboxModal
