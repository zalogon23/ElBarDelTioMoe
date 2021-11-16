import { Modal } from 'native-base'
import React, { ReactElement, useContext, useEffect, useState } from 'react'
import ButtonWithIcon from './ButtonWithIcon'
import Heading from './Heading'
import FormControl from "../components/FormControl"
import { sessionContext } from '../contexts/SessionContext'
import TokensHandler from '../lib/TokensHandler'

interface Props {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  [props: string]: any
}

function AuthModal({ isOpen, setIsOpen, ...props }: Props): ReactElement {
  const { sessionHandler } = useContext(sessionContext);
  const [authType, setAuthType] = useState("login" as "login" | "register");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  useEffect(() => {
    return () => {
      setTimeout(() => setAuthType("login"), 150);
    }
  }, [isOpen])
  return (
    <Modal
      size="xl"
      isOpen={isOpen}
      {...props}
    >
      <Modal.Content>
        {
          authType === "login" ?
            <>
              <Modal.Header>
                <Heading>Login</Heading>
              </Modal.Header>
              <Modal.CloseButton />
              <Modal.Body>
                <FormControl
                  label="Nombre de usuario"
                  helper=""
                  errorMessage=""
                  value={loginUsername}
                  onChangeText={(text: string) => setLoginUsername(text)}
                />
                <FormControl
                  label="Contraseña"
                  type="password"
                  helper=""
                  errorMessage=""
                  value={loginPassword}
                  onChangeText={(text: string) => setLoginPassword(text)}
                />
              </Modal.Body>
              <Modal.Footer
                flexDir="row"
              >
                <ButtonWithIcon
                  size="small"
                  mr="2"
                  colorScheme="amber"
                  focusColor="amber.400"
                  name="question"
                  color="white"
                  dir="right"
                  onPress={() => setAuthType("register")}
                >
                  Registrarme
                </ButtonWithIcon>
                <ButtonWithIcon
                  size="small"
                  colorScheme="amber"
                  focusColor="amber.300"
                  name="send"
                  color="white"
                  dir="right"
                  onPress={async () => {
                    await sessionHandler.Login(loginUsername, loginPassword);
                    setIsOpen(false);
                  }}
                >
                  Enviar
                </ButtonWithIcon>
              </Modal.Footer>
            </>
            :
            <>
              <Modal.Header
                display="flex"
              >
                <Heading>Registro</Heading>
              </Modal.Header>
              <Modal.CloseButton />
              <Modal.Body>
                <FormControl
                  label="Nombre de usuario"
                  helper="Tu mejor apodo!"
                  value={registerUsername}
                  onChangeText={(text: string) => setRegisterUsername(text)}
                  errorMessage=""
                />
                <FormControl
                  label="Contraseña"
                  helper="Una contraseña difil, con minimo 8 caracteres"
                  errorMessage=""
                  type="password"
                  value={registerPassword}
                  onChangeText={(text: string) => setRegisterPassword(text)}
                />
              </Modal.Body>
              <Modal.Footer>
                <ButtonWithIcon
                  size="small"
                  colorScheme="amber"
                  focusColor="amber.300"
                  name="send"
                  color="white"
                  dir="right"
                  onPress={() => { }}
                >
                  Enviar
                </ButtonWithIcon>
              </Modal.Footer>
            </>
        }
      </Modal.Content>
    </Modal>
  )
}



export default AuthModal
