import { Box } from 'native-base'
import React, { ReactElement, useContext } from 'react'
import { userContext } from '../contexts/UserContext';
import ButtonWithIcon from './ButtonWithIcon';
import Loading from './Loading';

interface Props {
  enter: () => void,
  auth: () => void
}

function EnterButtons({
  enter,
  auth
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
                  size="small"
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
                    size="small"
                    dir="right"
                    name="key"
                    color="white"
                    py="2"
                    mt="8"
                    focusColor="amber.300"
                    onPress={auth}
                  >
                    Loguearme
                  </ButtonWithIcon>

                  <ButtonWithIcon
                    shadow
                    size="small"
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
