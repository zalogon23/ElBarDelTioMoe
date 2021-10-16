import { VStack } from 'native-base'
import React, { ReactElement, useState } from 'react'
import IngredientType from '../models/IngredientType';
import InstructionType from '../models/InstructionType';
import LineCard from './LineCard';

interface Props {
  items: InstructionType[] | IngredientType[],
  donable: boolean,
  [props: string]: any
}
type DonableItem = InstructionType & { done: boolean } | IngredientType & { done: boolean }

function LineCardStack({
  items,
  donable,
  ...props
}: Props): ReactElement {
  const [donableItems, setDonableItems] = useState(items.map(getDonableInstruction));
  return (
    <VStack
      pt="4"
      space="3"
    >
      {
        donableItems.map(item => {
          const content = "content" in item ? item.content : `${item.product}:  ${item.quantity} ${item.measure}`;
          return (
            <LineCard
              key={item.id}
              donable={donable}
              content={content}
              done={item.done}
              onPress={
                donable ?
                  () => toggleDoneItem(item)
                  :
                  () => { }
              }
              {...props}
            />
          )
        })
      }
    </VStack>
  )

  function toggleDoneItem(item: DonableItem) {
    setDonableItems(donableItems.map(ins => {
      if (ins.id == item.id) {
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

function getDonableInstruction(item: InstructionType | IngredientType): DonableItem {
  return ({
    ...item,
    done: false
  })
}


export default LineCardStack
