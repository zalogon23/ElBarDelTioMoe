import { VStack } from 'native-base'
import React, { ReactElement, useState } from 'react'
import Instruction from './Instruction'

interface Props {
  instructions: string[],
  donable?: boolean,
  [props: string]: any
}

interface DonableInstruction {
  content: string,
  done: boolean
}

function Instructions({
  instructions,
  donable = false,
  ...props
}: Props): ReactElement {
  const [donableInstructions, setDonableInstructions] = useState(instructions.map(getDonableInstruction));
  return (
    <VStack
      pt="4"
      space="3"
    >
      {
        donableInstructions.map(instruction => (
          <Instruction
            key={instruction.content}
            content={instruction.content}
            done={instruction.done}
            onPress={
              donable ?
                () => toggleDoneInstruction(instruction)
                :
                undefined
            }
          />
        ))
      }
    </VStack>
  )

  function toggleDoneInstruction(instruction: DonableInstruction) {
    setDonableInstructions(donableInstructions.map(ins => {
      if (ins.content == instruction.content) {
        return ({
          ...ins, done: !ins.done
        })
      }
      else {
        return ins
      }
    }))
  }
}

function getDonableInstruction(content: string): DonableInstruction {
  return ({
    content,
    done: false
  })
}


export default Instructions
