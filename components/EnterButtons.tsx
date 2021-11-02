import { Box } from 'native-base'
import React, { ReactElement, useContext } from 'react'
import { userContext } from '../contexts/UserContext';
import ButtonWithIcon from './ButtonWithIcon';
import Loading from './Loading';

interface Props {
  enter: () => void
}

function EnterButtons({
  enter
}: Props): ReactElement {
  const { isLoading, user } = useContext(userContext)
  return (
    <>
      {
        isLoading
          ?
          <Loading />
          :
          <Box>
            {
              user
                ?
                <ButtonWithIcon
                  shadow
                  dir="right"
                  name="arrow-right"
                  color="white"
                  py="2"
                  mt="8"
                  focusColor="amber.300"
                  onPress={enter}
                >
                  Entrar
                </ButtonWithIcon>
                :
                <>
                  <ButtonWithIcon
                    shadow
                    dir="right"
                    name="key"
                    color="white"
                    py="2"
                    mt="8"
                    focusColor="amber.300"
                    onPress={() => { }}
                  >
                    Loguearme
                  </ButtonWithIcon>

                  <ButtonWithIcon
                    shadow
                    dir="right"
                    name="arrow-right"
                    color="white"
                    py="2"
                    mt="8"
                    focusColor="amber.300"
                    onPress={enter}
                  >
                    Invitado
                  </ButtonWithIcon>
                </>
            }
          </Box>
      }
    </>
  )
}

export default EnterButtons
