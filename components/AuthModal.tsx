import { Input, Modal } from 'native-base'
import React, { ReactElement, useContext, useEffect, useState } from 'react'
import styling from '../lib/styling'
import ButtonWithIcon from './ButtonWithIcon'
import Heading from './Heading'
import FormControl from "../components/FormControl"
import UserHandler from '../lib/UserHandler'
import { userContext } from '../contexts/UserContext'


interface Props {
  isOpen: boolean,
  [props: string]: any
}

function AuthModal({ isOpen, ...props }: Props): ReactElement {
  const { setUser } = useContext(userContext);
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
                  onChange={(e: any) => setLoginUsername(e.target.value)}
                />
                <FormControl
                  label="Contraseña"
                  type="password"
                  helper=""
                  errorMessage=""
                  value={loginPassword}
                  onChange={(e: any) => setLoginPassword(e.target.value)}
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
                  onPress={() => UserHandler.Login(loginUsername, loginPassword, setUser)}
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
                  onChange={(e: any) => setRegisterUsername(e.target.value)}
                  errorMessage=""
                />
                <FormControl
                  label="Contraseña"
                  helper="Una contraseña difil, con minimo 8 caracteres"
                  errorMessage=""
                  type="password"
                  value={registerPassword}
                  onChange={(e: any) => setRegisterPassword(e.target.value)}
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
                  onPress={() => UserHandler.Register(registerUsername, registerPassword)}
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
