import { Box, Checkbox, Modal } from 'native-base'
import React, { ReactElement, useEffect, useState } from 'react'
import KeywordType from '../models/KeywordType'
import ButtonWithIcon from './ButtonWithIcon'
import Heading from './Heading'
import Note from './Note'
import Text from './Text'

interface Props {
  values: KeywordType[],
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
            values.map(keyword => (
              <Box
                key={keyword.id}
                flexDir="row"
                py="3"
                mb="2"
                alignItems="center"
              >
                <Checkbox
                  isChecked={checkedValues.includes(keyword.content)}
                  accessibilityLabel={`Elegir ${keyword.content}`}
                  onChange={checked => updateCheckedValues(checked, keyword.content)}
                  value={keyword.content}
                >
                  {keyword.content}
                </Checkbox>
              </Box>
            ))
          }
        </Modal.Body>
        <Modal.Footer>
          <ButtonWithIcon
            color="white"
            focusColor="amber.600"
            dir="right"
            onPress={() => action(checkedValues)}
            name="check"
            size="small"
          >
            Listo
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
